import React from 'react';
import { storiesOf } from '@storybook/react';
import { AptoIcon } from './AptoIcon';
import { AptoContainer } from '../Container';
import { AptoRow } from '../Row';
import { AptoCol } from '../Column';
import './aptoIconStories.scss';
import { AptoButton } from '../Button';
import {
  add,
  addPhoto,
  apto,
  arrowBack,
  arrowForward,
  assignment,
  briefCase,
  callList,
  check,
  checkboxChecked,
  checkboxOutline,
  checkCircle,
  close,
  company,
  down,
  download,
  dropDown,
  dropUp,
  edit,
  email,
  fax,
  file,
  folder,
  help,
  home,
  left,
  link,
  list,
  loyalty,
  meeting,
  menu,
  money,
  newRelease,
  peaks,
  people,
  person,
  personCircle,
  phone,
  property,
  radioOutline,
  radioChecked,
  right,
  search,
  smartPhone,
  space,
  task,
  thumbUp,
  time,
  trendingUp,
  trendingDown,
  up
} from '@apto/icons';

storiesOf('Icon', module).add('Default', () => (
  <AptoContainer className="aptoIconStories">
    <AptoRow className="icon-set-list">
      <AptoCol sm="2">
        <AptoIcon icon={property} />
        <span className="icon-meta">property</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={company} />
        <span className="icon-meta">company</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={space} />
        <span className="icon-meta">space</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={home} />
        <span className="icon-meta">home</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={email} />
        <span className="icon-meta">email</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={phone} />
        <span className="icon-meta">phone</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={fax} />
        <span className="icon-meta">fax</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={smartPhone} />
        <span className="icon-meta">smartPhone</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={folder} />
        <span className="icon-meta">folder</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={file} />
        <span className="icon-meta">file</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={callList} />
        <span className="icon-meta">callList</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={person} />
        <span className="icon-meta">person</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={personCircle} />
        <span className="icon-meta">personCircle</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={people} />
        <span className="icon-meta">people</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={thumbUp} />
        <span className="icon-meta">thumbUp</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={newRelease} />
        <span className="icon-meta">newRelease</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={time} />
        <span className="icon-meta">time</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={task} />
        <span className="icon-meta">task</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={money} />
        <span className="icon-meta">money</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={meeting} />
        <span className="icon-meta">meeting</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={assignment} />
        <span className="icon-meta">assignment</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={peaks} />
        <span className="icon-meta">peaks</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={loyalty} />
        <span className="icon-meta">loyalty</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={trendingUp} />
        <span className="icon-meta">trendingUp</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={trendingDown} />
        <span className="icon-meta">trendingDown</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={apto} />
        <span className="icon-meta">apto</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={briefCase} />
        <span className="icon-meta">briefCase</span>
      </AptoCol>
    </AptoRow>

    <h3 className="heading">Controls</h3>
    <AptoRow className="icon-set-list">
      <AptoCol sm="2">
        <AptoIcon icon={search} />
        <span className="icon-meta">search</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={edit} />
        <span className="icon-meta">edit</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={help} />
        <span className="icon-meta">help</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={addPhoto} />
        <span className="icon-meta">addPhoto</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={add} />
        <span className="icon-meta">add</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={check} />
        <span className="icon-meta">check</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={checkboxChecked} />
        <span className="icon-meta">checkboxChecked</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={checkboxOutline} />
        <span className="icon-meta">checkboxOutline</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={checkCircle} />
        <span className="icon-meta">checkCircle</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={close} />
        <span className="icon-meta">close</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={radioOutline} />
        <span className="icon-meta">radioOutline</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={radioChecked} />
        <span className="icon-meta">radioChecked</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={download} />
        <span className="icon-meta">download</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={link} />
        <span className="icon-meta">link</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={list} />
        <span className="icon-meta">list</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={menu} />
        <span className="icon-meta">menu</span>
      </AptoCol>
    </AptoRow>

    <h3 className="heading">Directions</h3>
    <AptoRow className="icon-set-list">
      <AptoCol sm="2">
        <AptoIcon icon={left} />
        <span className="icon-meta">left</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={right} />
        <span className="icon-meta">right</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={up} />
        <span className="icon-meta">up</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={down} />
        <span className="icon-meta">down</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={dropDown} />
        <span className="icon-meta">dropDown</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={dropUp} />
        <span className="icon-meta">dropUp</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={arrowForward} />
        <span className="icon-meta">arrowForward</span>
      </AptoCol>
      <AptoCol sm="2">
        <AptoIcon icon={arrowBack} />
        <span className="icon-meta">arrowBack</span>
      </AptoCol>
    </AptoRow>
    <h3 className="heading">Circle Icons ("circle" attribute)</h3>
    <p>
      <AptoIcon circle icon={property} />
    </p>
    <h3 className="heading">Inline Icons ("inline" attribute)</h3>
    <p>
      <AptoButton>
        <AptoIcon inline icon={download} /> Button
      </AptoButton>
    </p>
    <p>
      <AptoButton>
        <AptoIcon inline icon={download} /> Button{' '}
        <AptoIcon inline icon={down} />
      </AptoButton>
    </p>
    <p>
      <AptoButton>
        Button <AptoIcon inline icon={down} />
      </AptoButton>
    </p>
    <p>
      <AptoIcon inline icon={thumbUp} /> Inline Text
    </p>
    <h3 className="heading">Sizing ("size" attribute)</h3>
    <p>
      <AptoIcon inline size="1" icon={property} />
      <AptoIcon inline circle size="1" icon={property} /> size="1"
    </p>
    <p>
      <AptoIcon inline size="2" icon={property} />
      <AptoIcon inline circle size="2" icon={property} /> size="2"
    </p>
    <p>
      <AptoIcon inline size="3" icon={property} />
      <AptoIcon inline circle size="3" icon={property} /> default / size="3"
    </p>
    <p>
      <AptoIcon inline size="4" icon={property} />
      <AptoIcon inline circle size="4" icon={property} /> size="4"
    </p>
    <p>
      <AptoIcon inline size="5" icon={property} />
      <AptoIcon inline circle size="5" icon={property} /> size="5"
    </p>
    <p>
      <AptoIcon inline size="6" icon={property} />
      <AptoIcon inline circle size="6" icon={property} /> size="6"
    </p>
    <h3 className="heading">Circle Color ("circleColor" attribute)</h3>
    <p>
      <AptoIcon inline circle icon={property} /> circleColor=""
    </p>
    <p>
      <span>
        <AptoIcon inline circle circleColor="white" icon={property} />
      </span>
      circleColor="white"
    </p>
    <p>
      <AptoIcon inline circle circleColor="blue" icon={property} />{' '}
      circleColor="blue"
    </p>
    <p>
      <AptoIcon inline circle circleColor="orange" icon={property} />{' '}
      circleColor="orange"
    </p>
    <p>
      <AptoIcon inline circle circleColor="lightGray" icon={property} />{' '}
      circleColor="lightGray"
    </p>
    <p>
      <AptoIcon inline circle circleColor="gray" icon={property} />{' '}
      circleColor="gray"
    </p>

    <h3 className="heading">Color ("Color" attribute)</h3>
    <p>
      <AptoIcon inline icon={property} /> color=""
    </p>
    <p>
      <span>
        <AptoIcon inline color="white" icon={property} />
      </span>
      color="white"
    </p>
    <p>
      <AptoIcon inline color="blue" icon={property} /> color="blue"
    </p>
    <p>
      <AptoIcon inline color="orange" icon={property} /> color="orange"
    </p>
    <p>
      <AptoIcon inline color="lightGray" icon={property} /> color="lightGray"
    </p>
    <p>
      <AptoIcon inline color="gray" icon={property} /> color="gray"
    </p>

    <h3 className="heading">Icon Status ("status" attribute)</h3>
    <p>
      <AptoIcon
        inline
        circle
        circleColor="blue"
        size="5"
        status="danger"
        icon={company}
      />
      circle circleColor="blue" status="danger"
    </p>
    <p>
      <AptoIcon
        inline
        circle
        circleColor="blue"
        size="5"
        status="warning"
        icon={company}
      />
      circle circleColor="blue" status="warning"
    </p>
    <p>
      <AptoIcon inline status="danger" icon={company} />
      status="danger"
    </p>
  </AptoContainer>
));
