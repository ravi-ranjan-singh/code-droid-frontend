import SelectOptions from '../select/select';
import { languages, themes, getFontsizes, tabSizes } from './settings_utils';
import './setting.css';

const Setting = ({ def_set, onChangeSetting }) => {
  return (
    <div className="settings">
      <SelectOptions
        arr={languages}
        text="Choose Language"
        op={'lang'}
        value={def_set.lang}
        onChangeSetting={onChangeSetting}
        property={'lang'}
      />
      <SelectOptions
        arr={themes}
        text="Choose Theme"
        op={'name'}
        value={def_set.theme}
        onChangeSetting={onChangeSetting}
        property={'theme'}
      />
      <SelectOptions
        arr={getFontsizes()}
        text="Choose Font"
        value={def_set.fsize}
        onChangeSetting={onChangeSetting}
        property={'fsize'}
      />
      <SelectOptions
        arr={tabSizes}
        text="Choose Tab Size"
        value={def_set.tsize}
        onChangeSetting={onChangeSetting}
        property={'tsize'}
      />
    </div>
  );
};

export default Setting;
