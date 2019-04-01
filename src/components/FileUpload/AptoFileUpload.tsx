import * as React from 'react';
import Dropzone from 'react-dropzone';
import classNames from 'classnames';
import './aptoFileUpload.scss';
import { AptoParagraph } from '../Paragraph';
import { AptoIcon } from '../Icon';
import { AptoList } from '../List';
import { AptoButton } from '../Button';
import { AptoListItem } from '../ListItem';
import { addPhoto, close } from '@apto/icons';
import { AptoHeader } from '../Header';
import prettyBytes from 'pretty-bytes';

interface AptoFileUploadProps {
  name: string;
  value?: string | undefined | null;
  onDrop?: (acceptedFiles: AptoFile[], rejectedFiles: AptoFile[]) => void;
  onDragEnter?: (event: React.DragEvent<HTMLElement>) => void;
  onCancel?: (originalValue: string | null) => void;
  onRemoveImage?: () => void;
  maxSize?: number;
  minSize?: number;
  multiple?: boolean;
  accept?: string | undefined;
  imageComponent?:
    | React.ComponentClass<any>
    | React.StatelessComponent<any>
    | any;
}

interface AptoFile extends File {
  preview?: string;
}

interface AptoFileUploadState {
  files: AptoFile[];
  rejected: AptoFile[];
  hasPreviousImage: boolean;
}

export class AptoFileUpload extends React.Component<
  AptoFileUploadProps,
  AptoFileUploadState
> {
  public static defaultProps = {
    maxSize: 5000000, // 5mb
    minSize: 0,
    accept: 'image/png,image/jpeg',
    value: null,
    multiple: false
  };

  public originalValue: string | null = null;
  public urlPointers: string[] = [];

  constructor(props: AptoFileUploadProps) {
    super(props);
    this.originalValue = this.props.value || null;
    this.state = {
      files: [],
      rejected: [],
      hasPreviousImage:
        this.originalValue && this.originalValue !== '' ? true : false
    };
  }

  public componentWillUnmount() {
    this.removeImageBlobs();
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

  public onDrop = (acceptedFiles: AptoFile[], rejectedFiles: AptoFile[]) => {
    const { onDrop } = this.props;

    const files = acceptedFiles.map(file =>
      Object.assign(file, {
        preview: this.getPreview(file)
      })
    );

    this.setState({
      files,
      rejected: rejectedFiles
    });

    if (onDrop) {
      onDrop(acceptedFiles, rejectedFiles);
    }
  };

  public handleCancel = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    this.setState({
      hasPreviousImage: this.originalValue ? true : false
    });

    this.onCancel();
  };

  public removeSelected = (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    event.preventDefault();
    event.stopPropagation();
    const fileName = event.currentTarget.dataset.name;
    const newFiles = this.state.files.filter(file => file.name !== fileName);
    this.setState({
      files: newFiles
    });
  };

  public onCancel = () => {
    const { onCancel } = this.props;

    this.setState({
      files: [],
      rejected: []
    });

    this.removeImageBlobs();

    if (onCancel) {
      onCancel(this.originalValue);
    }
  };

  public render() {
    if (this.state.hasPreviousImage) {
      return (
        <div className="dropzone-previousImage">
          {this.getImageTag()}
          <br />
          <AptoButton
            className="dropzone-change"
            kind="link"
            onClick={this.removeOldImage}
          >
            Remove <AptoIcon size="2" inline={true} icon={close} />
          </AptoButton>
        </div>
      );
    }

    const acceptedList = this.getAcceptedFiles();
    const rejectedList = this.getRejectedFiles();

    return (
      <Dropzone
        maxSize={this.props.maxSize}
        minSize={this.props.minSize}
        multiple={this.props.multiple}
        name={this.props.name}
        onFileDialogCancel={this.onCancel}
        accept={this.props.accept}
        onDrop={this.onDrop}
        onDragEnter={this.props.onDragEnter}
      >
        {({ getRootProps, getInputProps, isDragActive }) => {
          return (
            <div
              {...getRootProps()}
              className={classNames('dropzone', {
                'dropzone--isActive': isDragActive
              })}
            >
              <AptoIcon size="5" icon={addPhoto} className="dropzone-addIcon" />
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

              {this.props.maxSize && (
                <AptoParagraph className="fileSize">
                  (Max file size {prettyBytes(this.props.maxSize)})
                </AptoParagraph>
              )}

              {acceptedList && (
                <div className="fileList">
                  <AptoList type="ul" className="fileList">
                    {acceptedList}
                  </AptoList>
                </div>
              )}

              {rejectedList && (
                <div className="fileList rejetedFileList">
                  <AptoHeader type="4">Rejected Files</AptoHeader>
                  <AptoList type="ul">{rejectedList}</AptoList>
                </div>
              )}
              {this.originalValue && (
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

  private getRejectedFiles() {
    const { rejected } = this.state;
    return rejected && rejected.length
      ? rejected.map((file: any) => {
          return (
            <AptoListItem key={file.name || 'unknown'}>
              {file.name || 'unknown'}
            </AptoListItem>
          );
        })
      : null;
  }

  private getAcceptedFiles() {
    const { files } = this.state;
    return files && files.length
      ? files.map((file: any) => {
          return (
            <AptoListItem key={file.name || 'unknown'}>
              {file.preview && (
                <img src={file.preview} className="dropzone-preview" />
              )}
              {file.name || 'unknown'}
              <AptoButton
                title="Remove"
                kind="link"
                data-name={file.name}
                onClick={this.removeSelected}
              >
                <AptoIcon size="2" inline={true} icon={close} />
              </AptoButton>
            </AptoListItem>
          );
        })
      : null;
  }

  private getImageTag() {
    const { imageComponent: Component } = this.props;
    let image = null;
    if (this.originalValue && typeof Component === 'object') {
      image = Component;
    } else if (this.originalValue && Component) {
      image = <Component />;
    } else if (this.originalValue) {
      image = <img src={this.originalValue} alt="" />;
    }
    return image;
  }

  private getPreview(file: AptoFile) {
    let url = null;
    if (this.isImage(file.type)) {
      url = URL.createObjectURL(file);
      this.urlPointers.push(url);
    }
    return url;
  }

  private removeImageBlobs() {
    this.urlPointers.forEach(url => {
      URL.revokeObjectURL(url);
    });
  }

  private isImage(type: string): boolean {
    const imageTypes = ['image/png', 'image/jpeg', 'image/gif', 'image/bmp'];
    return imageTypes.indexOf(type) > -1;
  }
}
