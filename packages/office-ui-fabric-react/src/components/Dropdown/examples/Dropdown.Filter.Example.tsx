import * as React from 'react';
import { Dropdown, DropdownMenuItemType } from 'office-ui-fabric-react/lib/Dropdown';
import { BaseComponent } from 'office-ui-fabric-react/lib/Utilities';
import './Dropdown.Basic.Example.scss';

export class DropdownFilterExample extends BaseComponent<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <div className="docs-DropdownExample">
        <Dropdown
          placeHolder="Select options"
          label="Multi-Select controlled example:"
          showFilterBox
          filterPlaceholderText="Search"
          onFocus={this._log('onFocus called')}
          onBlur={this._log('onBlur called')}
          multiSelect
          options={[
            { key: 'Header4', text: 'Colors', itemType: DropdownMenuItemType.Header },
            { key: 'red', text: 'Red' },
            { key: 'green', text: 'Green' },
            { key: 'blue', text: 'Blue' },
            { key: 'yellow', text: 'Yellow' },
            { key: 'divider_2', text: '-', itemType: DropdownMenuItemType.Divider },
            { key: 'Header5', text: 'Flower', itemType: DropdownMenuItemType.Header },
            { key: 'rose', text: 'Rose' },
            { key: 'lily', text: 'Lily' },
            { key: 'sunflower', text: 'Sunflower' }
          ]}
        />
      </div>
    );
  }

  private _log(str: string): () => void {
    return (): void => {
      console.log(str);
    };
  }
}
