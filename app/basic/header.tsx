import React from 'react';
import * as Menubar from '@radix-ui/react-menubar';
import { CheckIcon, ChevronRightIcon, DotFilledIcon } from '@radix-ui/react-icons';
import './styles.css';

const RADIO_ITEMS = ['Andy', 'Benoît', 'Luis'];
const CHECK_ITEMS = ['Always Show Bookmarks Bar', 'Always Show Full URLs'];

const Header = () => {
  const [checkedSelection, setCheckedSelection] = React.useState([CHECK_ITEMS[1]]);
  const [radioSelection, setRadioSelection] = React.useState(RADIO_ITEMS[2]);
  return (
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <a className="mr-5 text-xl text-white" rel="noopener" href="#aboutme">About me</a>
        <a className="mr-5 text-xl text-white" rel="noopener" href="#careers">Careers</a>
        <a className="mr-5 text-xl text-white" rel="noopener" href="#education">Education</a>
      </div>
    </div>

  );
};

export default Header;