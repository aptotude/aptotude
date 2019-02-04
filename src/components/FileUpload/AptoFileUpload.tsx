import * as React from 'react';
import Dropzone from 'react-dropzone';
import classNames from 'classnames';
import './aptoFileUpload.scss';
import { AptoParagraph } from '../Paragraph';
import { AptoIcon } from '../Icon';
import { AptoList } from '../List';
import { AptoButton } from '../Button';
import { AptoListItem } from '../ListItem';
import { UploadIcon } from './UploadIcon';

interface AptoFileUploadProps {
  name: string;
  previousPhotoUrl?: string | undefined | null;
  onDrop?: (acceptedFiles: any, rejectedFiles: any) => void;
  onCancel?: () => void;
  onRemoveImage?: () => void;
  maxSize?: number;
  minSize?: number;
  multiple?: boolean;
  accept?: string | undefined;
}

interface AptoFileUploadState {
  files: any;
  hasPreviousImage: boolean;
}

export class AptoFileUpload extends React.Component<
  AptoFileUploadProps,
  AptoFileUploadState
> {
  public static defaultProps = {
    maxSize: 5242880, // 5mb
    minSize: 0,
    accept: 'image/png,image/jpeg',
    previousPhotoUrl: undefined,
    multiple: false
  };

  constructor(props: AptoFileUploadProps) {
    super(props);

    let hasPreviousImage = false;
    if (this.props.previousPhotoUrl && this.props.previousPhotoUrl !== '') {
      hasPreviousImage = true;
    }

    this.state = {
      files: [],
      hasPreviousImage
    };
  }

  public removeOldImage = (e: React.MouseEvent) => {
    const { onRemoveImage } = this.props;
    e.preventDefault();

    this.setState({
      hasPreviousImage: false
    });

    if (onRemoveImage) {
      onRemoveImage();
    }
  };

  public onDrop = (acceptedFiles: any, rejectedFiles: any) => {
    const { onDrop } = this.props;

    this.setState({
      files: acceptedFiles
    });

    if (onDrop) {
      onDrop(acceptedFiles, rejectedFiles);
    }
  };

  public handleCancel = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    this.setState({
      hasPreviousImage: this.props.previousPhotoUrl ? true : false
    });

    this.onCancel();
  };

  public onCancel = () => {
    const { onCancel } = this.props;

    this.setState({
      files: []
    });

    if (onCancel) {
      onCancel();
    }
  };

  public render() {
    if (this.state.hasPreviousImage) {
      return (
        <div className="dropzone-previousImage">
          {this.props.previousPhotoUrl && (
            <img src={this.props.previousPhotoUrl} alt="" />
          )}
          <br />
          <AptoButton
            className="dropzone-change"
            kind="link"
            onClick={this.removeOldImage}
          >
            Change
          </AptoButton>
        </div>
      );
    }

    const { files } = this.state;
    const acceptedList =
      files && files.length
        ? files.map((f: any) => {
            return (
              <AptoListItem key={f.name || 'unknown'}>
                {f.name || 'unknown'}
              </AptoListItem>
            );
          })
        : null;
    return (
      <Dropzone
        maxSize={this.props.maxSize}
        minSize={this.props.minSize}
        multiple={this.props.multiple}
        name={this.props.name}
        onFileDialogCancel={this.onCancel}
        accept={this.props.accept}
        onDrop={this.onDrop}
      >
        {({ getRootProps, getInputProps, isDragActive }) => {
          return (
            <div
              {...getRootProps()}
              className={classNames('dropzone', {
                'dropzone--isActive': isDragActive
              })}
            >
              <AptoIcon
                size="5"
                icon={UploadIcon}
                className="dropzone-addIcon"
              />
              <input {...getInputProps()} />
              {isDragActive ? (
                <AptoParagraph>Drop the file here</AptoParagraph>
              ) : (
                <div>
                  <span className="AptoButton AptoButton--button AptoButton--primary">
                    Choose File{this.props.multiple ? 's' : null} To Upload
                  </span>
                  <AptoParagraph>
                    or drag and drop file{this.props.multiple ? 's' : null} here
                  </AptoParagraph>
                </div>
              )}
              {acceptedList && (
                <AptoList type="ul" className="fileList">
                  {acceptedList}
                </AptoList>
              )}
              {this.props.previousPhotoUrl && (
                <AptoButton
                  kind="link"
                  className="dropzone-cancel"
                  onClick={this.handleCancel}
                >
                  Cancel
                </AptoButton>
              )}
            </div>
          );
        }}
      </Dropzone>
    );
  }
}
