import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';

import SavePermissionsButton from '../SavePermissionsButton';
import SavePermissionsButtonProps from '../types';

function renderSavePermissionsButton(props: Partial<SavePermissionsButtonProps> = {}) {
  const defaultProps: SavePermissionsButtonProps = {
    onSave() {
      console.log("save");
    }
  };
  return render(<SavePermissionsButton {...defaultProps} {...props} />);
}

describe("<SavePermissionsButton />", () => {
  test("should display save button", async () => {
    const { findByTestId } = renderSavePermissionsButton();
    const saveBtn = await findByTestId("save-button");

    expect(saveBtn).toMatchSnapshot()
  });
});
