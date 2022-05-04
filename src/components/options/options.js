import { useContext } from 'react';
import { FormGroup, NumericInput, Switch } from "@blueprintjs/core";
import { SettingsContext } from "../../context/settings";
import './options.scss'


function Options(props) {
  const { settings, settingsDispatch } = useContext(SettingsContext);

  function handleSwitchChange(event) {
    event.preventDefault();
    //console.log(event.target.checked);
    settingsDispatch({ type: 'TOGGLE_HIDE', payload: null });
  }

  function handleNumberChange(number) {
    settingsDispatch({ type: 'DISPLAY_NUM', payload: number })
  }

  return (
    <>
      <FormGroup label='Display Options'>
        <Switch
          checked={settings.hideCompleted}
          inline='true' alignIndicator='Alignment.LEFT'
          label='Hide Completed Items'
          onChange={handleSwitchChange}
        />
        <NumericInput min={2} placeholder={settings.numToDisplay} label='Max # items to display' onValueChange={handleNumberChange} />
      </FormGroup>
    </>
  )
}

export default Options;
