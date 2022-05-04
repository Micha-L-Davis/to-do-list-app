import { useContext } from 'react';
import { FormGroup, InputGroup, Switch } from "@blueprintjs/core";
import { SettingsContext } from "../../context/settings";


function Options(props) {
  const settings = useContext(SettingsContext);

  return (
    <>
      <FormGroup label='Display Options'>
        <Switch checked={settings.hideCompleted} label='Hide Completed Items' /*onChange={}*/ />
        <InputGroup type='text' placeholder={settings.numToDisplay} label='Max # items to display' /*onChange={}*/ />
      </FormGroup>
    </>
  )
}

export default Options;
