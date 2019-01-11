import React from 'react';
import { storiesOf } from '@storybook/react';
import { AptoTable } from './AptoTable';
import { AptoTableHead } from '../TableHead';
import { AptoTableBody } from '../TableBody';
import { AptoTableRow } from '../TableRow';
import { AptoTableCell } from '../TableCell';

storiesOf('Table', module)
  .add('Default', () => (
    <AptoTable>
      <AptoTableHead>
        <AptoTableRow>
          <AptoTableCell type="th" scope="col">
            #
          </AptoTableCell>
          <AptoTableCell type="th" scope="col">
            First
          </AptoTableCell>
          <AptoTableCell type="th" scope="col">
            Last
          </AptoTableCell>
          <AptoTableCell type="th" scope="col">
            Initials
          </AptoTableCell>
        </AptoTableRow>
      </AptoTableHead>
      <AptoTableBody>
        <AptoTableRow>
          <AptoTableCell type="th" scope="row">
            1
          </AptoTableCell>
          <AptoTableCell>John</AptoTableCell>
          <AptoTableCell>Doe</AptoTableCell>
          <AptoTableCell>JD</AptoTableCell>
        </AptoTableRow>
        <AptoTableRow>
          <AptoTableCell type="th" scope="row">
            2
          </AptoTableCell>
          <AptoTableCell>Jane</AptoTableCell>
          <AptoTableCell>Doe</AptoTableCell>
          <AptoTableCell>JD</AptoTableCell>
        </AptoTableRow>
        <AptoTableRow>
          <AptoTableCell type="th" scope="row">
            3
          </AptoTableCell>
          <AptoTableCell>Bob</AptoTableCell>
          <AptoTableCell>Doe</AptoTableCell>
          <AptoTableCell>BD</AptoTableCell>
        </AptoTableRow>
      </AptoTableBody>
    </AptoTable>
  ))

  .add('Bordered', () => (
    <AptoTable bordered>
      <AptoTableHead>
        <AptoTableRow>
          <AptoTableCell type="th" scope="col">
            #
          </AptoTableCell>
          <AptoTableCell type="th" scope="col">
            First
          </AptoTableCell>
          <AptoTableCell type="th" scope="col">
            Last
          </AptoTableCell>
          <AptoTableCell type="th" scope="col">
            Initials
          </AptoTableCell>
        </AptoTableRow>
      </AptoTableHead>
      <AptoTableBody>
        <AptoTableRow>
          <AptoTableCell type="th" scope="row">
            1
          </AptoTableCell>
          <AptoTableCell>John</AptoTableCell>
          <AptoTableCell>Doe</AptoTableCell>
          <AptoTableCell>JD</AptoTableCell>
        </AptoTableRow>
        <AptoTableRow>
          <AptoTableCell type="th" scope="row">
            2
          </AptoTableCell>
          <AptoTableCell>Jane</AptoTableCell>
          <AptoTableCell>Doe</AptoTableCell>
          <AptoTableCell>JD</AptoTableCell>
        </AptoTableRow>
        <AptoTableRow>
          <AptoTableCell type="th" scope="row">
            3
          </AptoTableCell>
          <AptoTableCell>Bob</AptoTableCell>
          <AptoTableCell>Doe</AptoTableCell>
          <AptoTableCell>BD</AptoTableCell>
        </AptoTableRow>
      </AptoTableBody>
    </AptoTable>
  ))
  .add('Borderless', () => (
    <AptoTable borderless>
      <AptoTableHead>
        <AptoTableRow>
          <AptoTableCell type="th" scope="col">
            #
          </AptoTableCell>
          <AptoTableCell type="th" scope="col">
            First
          </AptoTableCell>
          <AptoTableCell type="th" scope="col">
            Last
          </AptoTableCell>
          <AptoTableCell type="th" scope="col">
            Initials
          </AptoTableCell>
        </AptoTableRow>
      </AptoTableHead>
      <AptoTableBody>
        <AptoTableRow>
          <AptoTableCell type="th" scope="row">
            1
          </AptoTableCell>
          <AptoTableCell>John</AptoTableCell>
          <AptoTableCell>Doe</AptoTableCell>
          <AptoTableCell>JD</AptoTableCell>
        </AptoTableRow>
        <AptoTableRow>
          <AptoTableCell type="th" scope="row">
            2
          </AptoTableCell>
          <AptoTableCell>Jane</AptoTableCell>
          <AptoTableCell>Doe</AptoTableCell>
          <AptoTableCell>JD</AptoTableCell>
        </AptoTableRow>
        <AptoTableRow>
          <AptoTableCell type="th" scope="row">
            3
          </AptoTableCell>
          <AptoTableCell>Bob</AptoTableCell>
          <AptoTableCell>Doe</AptoTableCell>
          <AptoTableCell>BD</AptoTableCell>
        </AptoTableRow>
      </AptoTableBody>
    </AptoTable>
  ))
  .add('Striped', () => (
    <AptoTable striped>
      <AptoTableHead>
        <AptoTableRow>
          <AptoTableCell type="th" scope="col">
            #
          </AptoTableCell>
          <AptoTableCell type="th" scope="col">
            First
          </AptoTableCell>
          <AptoTableCell type="th" scope="col">
            Last
          </AptoTableCell>
          <AptoTableCell type="th" scope="col">
            Initials
          </AptoTableCell>
        </AptoTableRow>
      </AptoTableHead>
      <AptoTableBody>
        <AptoTableRow>
          <AptoTableCell type="th" scope="row">
            1
          </AptoTableCell>
          <AptoTableCell>John</AptoTableCell>
          <AptoTableCell>Doe</AptoTableCell>
          <AptoTableCell>JD</AptoTableCell>
        </AptoTableRow>
        <AptoTableRow>
          <AptoTableCell type="th" scope="row">
            2
          </AptoTableCell>
          <AptoTableCell>Jane</AptoTableCell>
          <AptoTableCell>Doe</AptoTableCell>
          <AptoTableCell>JD</AptoTableCell>
        </AptoTableRow>
        <AptoTableRow>
          <AptoTableCell type="th" scope="row">
            3
          </AptoTableCell>
          <AptoTableCell>Bob</AptoTableCell>
          <AptoTableCell>Doe</AptoTableCell>
          <AptoTableCell>BD</AptoTableCell>
        </AptoTableRow>
      </AptoTableBody>
    </AptoTable>
  ))
  .add('Hover', () => (
    <AptoTable hover striped>
      <AptoTableHead>
        <AptoTableRow>
          <AptoTableCell type="th" scope="col">
            #
          </AptoTableCell>
          <AptoTableCell type="th" scope="col">
            First
          </AptoTableCell>
          <AptoTableCell type="th" scope="col">
            Last
          </AptoTableCell>
          <AptoTableCell type="th" scope="col">
            Initials
          </AptoTableCell>
        </AptoTableRow>
      </AptoTableHead>
      <AptoTableBody>
        <AptoTableRow>
          <AptoTableCell type="th" scope="row">
            1
          </AptoTableCell>
          <AptoTableCell>John</AptoTableCell>
          <AptoTableCell>Doe</AptoTableCell>
          <AptoTableCell>JD</AptoTableCell>
        </AptoTableRow>
        <AptoTableRow>
          <AptoTableCell type="th" scope="row">
            2
          </AptoTableCell>
          <AptoTableCell>Jane</AptoTableCell>
          <AptoTableCell>Doe</AptoTableCell>
          <AptoTableCell>JD</AptoTableCell>
        </AptoTableRow>
        <AptoTableRow>
          <AptoTableCell type="th" scope="row">
            3
          </AptoTableCell>
          <AptoTableCell>Bob</AptoTableCell>
          <AptoTableCell>Doe</AptoTableCell>
          <AptoTableCell>BD</AptoTableCell>
        </AptoTableRow>
      </AptoTableBody>
    </AptoTable>
  ))
  .add('Highlight', () => (
    <React.Fragment>
      <AptoTable>
        <AptoTableHead>
          <AptoTableRow>
            <AptoTableCell type="th" scope="col">
              #
            </AptoTableCell>
            <AptoTableCell type="th" scope="col">
              First
            </AptoTableCell>
            <AptoTableCell type="th" scope="col">
              Last
            </AptoTableCell>
            <AptoTableCell type="th" scope="col">
              Initials
            </AptoTableCell>
          </AptoTableRow>
        </AptoTableHead>
        <AptoTableBody>
          <AptoTableRow highlight="danger">
            <AptoTableCell type="th" scope="row">
              1
            </AptoTableCell>
            <AptoTableCell>danger</AptoTableCell>
            <AptoTableCell>Doe</AptoTableCell>
            <AptoTableCell>JD</AptoTableCell>
          </AptoTableRow>
          <AptoTableRow highlight="warning">
            <AptoTableCell type="th" scope="row">
              2
            </AptoTableCell>
            <AptoTableCell>warning</AptoTableCell>
            <AptoTableCell>Doe</AptoTableCell>
            <AptoTableCell>JD</AptoTableCell>
          </AptoTableRow>
          <AptoTableRow highlight="success">
            <AptoTableCell type="th" scope="row">
              3
            </AptoTableCell>
            <AptoTableCell>success</AptoTableCell>
            <AptoTableCell>Doe</AptoTableCell>
            <AptoTableCell>BD</AptoTableCell>
          </AptoTableRow>
          <AptoTableRow highlight="primary">
            <AptoTableCell type="th" scope="row">
              3
            </AptoTableCell>
            <AptoTableCell>primary</AptoTableCell>
            <AptoTableCell>Doe</AptoTableCell>
            <AptoTableCell>DD</AptoTableCell>
          </AptoTableRow>
        </AptoTableBody>
      </AptoTable>
      <hr />
      <h3>Or put the highlight direcrly on the AptoTableCell</h3>
      <AptoTable>
        <AptoTableHead>
          <AptoTableRow>
            <AptoTableCell type="th" scope="col">
              #
            </AptoTableCell>
            <AptoTableCell type="th" scope="col">
              First
            </AptoTableCell>
            <AptoTableCell type="th" scope="col">
              Last
            </AptoTableCell>
            <AptoTableCell type="th" scope="col">
              Initials
            </AptoTableCell>
          </AptoTableRow>
        </AptoTableHead>
        <AptoTableBody>
          <AptoTableRow>
            <AptoTableCell highlight="danger" type="th" scope="row">
              1
            </AptoTableCell>
            <AptoTableCell highlight="warning">John</AptoTableCell>
            <AptoTableCell highlight="success">Doe</AptoTableCell>
            <AptoTableCell highlight="primary">JD</AptoTableCell>
          </AptoTableRow>
          <AptoTableRow>
            <AptoTableCell type="th" scope="row">
              2
            </AptoTableCell>
            <AptoTableCell>Jane</AptoTableCell>
            <AptoTableCell>Doe</AptoTableCell>
            <AptoTableCell>JD</AptoTableCell>
          </AptoTableRow>
        </AptoTableBody>
      </AptoTable>
    </React.Fragment>
  ))
  .add('Small', () => (
    <AptoTable small>
      <AptoTableHead>
        <AptoTableRow>
          <AptoTableCell type="th" scope="col">
            #
          </AptoTableCell>
          <AptoTableCell type="th" scope="col">
            First
          </AptoTableCell>
          <AptoTableCell type="th" scope="col">
            Last
          </AptoTableCell>
          <AptoTableCell type="th" scope="col">
            Initials
          </AptoTableCell>
        </AptoTableRow>
      </AptoTableHead>
      <AptoTableBody>
        <AptoTableRow>
          <AptoTableCell type="th" scope="row">
            1
          </AptoTableCell>
          <AptoTableCell>John</AptoTableCell>
          <AptoTableCell>Doe</AptoTableCell>
          <AptoTableCell>JD</AptoTableCell>
        </AptoTableRow>
        <AptoTableRow>
          <AptoTableCell type="th" scope="row">
            2
          </AptoTableCell>
          <AptoTableCell>Jane</AptoTableCell>
          <AptoTableCell>Doe</AptoTableCell>
          <AptoTableCell>JD</AptoTableCell>
        </AptoTableRow>
        <AptoTableRow>
          <AptoTableCell type="th" scope="row">
            3
          </AptoTableCell>
          <AptoTableCell>Bob</AptoTableCell>
          <AptoTableCell>Doe</AptoTableCell>
          <AptoTableCell>BD</AptoTableCell>
        </AptoTableRow>
      </AptoTableBody>
    </AptoTable>
  ))
  .add('Responsive', () => (
    <AptoTable responsive>
      <AptoTableHead>
        <AptoTableRow>
          <AptoTableCell type="th" scope="col">
            #
          </AptoTableCell>
          <AptoTableCell type="th" scope="col">
            First
          </AptoTableCell>
          <AptoTableCell type="th" scope="col">
            Last
          </AptoTableCell>
          <AptoTableCell type="th" scope="col">
            Initials
          </AptoTableCell>
          <AptoTableCell type="th" scope="col">
            Heading
          </AptoTableCell>
          <AptoTableCell type="th" scope="col">
            Heading
          </AptoTableCell>
          <AptoTableCell type="th" scope="col">
            Heading
          </AptoTableCell>
          <AptoTableCell type="th" scope="col">
            Heading
          </AptoTableCell>
          <AptoTableCell type="th" scope="col">
            Heading
          </AptoTableCell>
          <AptoTableCell type="th" scope="col">
            Heading
          </AptoTableCell>
          <AptoTableCell type="th" scope="col">
            Heading
          </AptoTableCell>
          <AptoTableCell type="th" scope="col">
            Heading
          </AptoTableCell>
          <AptoTableCell type="th" scope="col">
            Heading
          </AptoTableCell>
          <AptoTableCell type="th" scope="col">
            Heading
          </AptoTableCell>
          <AptoTableCell type="th" scope="col">
            Heading
          </AptoTableCell>
          <AptoTableCell type="th" scope="col">
            Heading
          </AptoTableCell>
        </AptoTableRow>
      </AptoTableHead>
      <AptoTableBody>
        <AptoTableRow>
          <AptoTableCell type="th" scope="row">
            1
          </AptoTableCell>
          <AptoTableCell>John</AptoTableCell>
          <AptoTableCell>Doe</AptoTableCell>
          <AptoTableCell>JD</AptoTableCell>
          <AptoTableCell>Data</AptoTableCell>
          <AptoTableCell>Data</AptoTableCell>
          <AptoTableCell>Data</AptoTableCell>
          <AptoTableCell>Data</AptoTableCell>
          <AptoTableCell>Data</AptoTableCell>
          <AptoTableCell>Data</AptoTableCell>
          <AptoTableCell>Data</AptoTableCell>
          <AptoTableCell>Data</AptoTableCell>
          <AptoTableCell>Data</AptoTableCell>
          <AptoTableCell>Data</AptoTableCell>
          <AptoTableCell>Data</AptoTableCell>
          <AptoTableCell>Data</AptoTableCell>
        </AptoTableRow>
        <AptoTableRow>
          <AptoTableCell type="th" scope="row">
            2
          </AptoTableCell>
          <AptoTableCell>Jane</AptoTableCell>
          <AptoTableCell>Doe</AptoTableCell>
          <AptoTableCell>JD</AptoTableCell>
          <AptoTableCell>Data</AptoTableCell>
          <AptoTableCell>Data</AptoTableCell>
          <AptoTableCell>Data</AptoTableCell>
          <AptoTableCell>Data</AptoTableCell>
          <AptoTableCell>Data</AptoTableCell>
          <AptoTableCell>Data</AptoTableCell>
          <AptoTableCell>Data</AptoTableCell>
          <AptoTableCell>Data</AptoTableCell>
          <AptoTableCell>Data</AptoTableCell>
          <AptoTableCell>Data</AptoTableCell>
          <AptoTableCell>Data</AptoTableCell>
          <AptoTableCell>Data</AptoTableCell>
        </AptoTableRow>
        <AptoTableRow>
          <AptoTableCell type="th" scope="row">
            3
          </AptoTableCell>
          <AptoTableCell>Bob</AptoTableCell>
          <AptoTableCell>Doe</AptoTableCell>
          <AptoTableCell>BD</AptoTableCell>
          <AptoTableCell>Data</AptoTableCell>
          <AptoTableCell>Data</AptoTableCell>
          <AptoTableCell>Data</AptoTableCell>
          <AptoTableCell>Data</AptoTableCell>
          <AptoTableCell>Data</AptoTableCell>
          <AptoTableCell>Data</AptoTableCell>
          <AptoTableCell>Data</AptoTableCell>
          <AptoTableCell>Data</AptoTableCell>
          <AptoTableCell>Data</AptoTableCell>
          <AptoTableCell>Data</AptoTableCell>
          <AptoTableCell>Data</AptoTableCell>
          <AptoTableCell>Data</AptoTableCell>
        </AptoTableRow>
      </AptoTableBody>
    </AptoTable>
  ));
