/// third-party
import { FormattedMessage } from 'react-intl';
import { AddressBook } from 'tabler-icons-react';
// assets
import { IconKey, IconReceipt2, IconBug, IconBellRinging, IconPhoneCall, IconQuestionMark, IconShieldLock } from '@tabler/icons';

// constant
const icons = {
  IconKey,
  IconReceipt2,
  IconBug,
  IconBellRinging,
  IconPhoneCall,
  IconQuestionMark,
  IconShieldLock
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const subscribers = {
  id: 'subscribers',
  title: <FormattedMessage id="Subscribes" />,
  icon: <AddressBook size={23} style={{ marginRight: '10px' }} strokeWidth={1.5} color={'black'} />,
  type: 'group',
  children: [
    {
      id: 'subscribers-list',
      title: <FormattedMessage id="Subscribers List" />,
      type: 'item',
      icon: icons.IconKey,
      url: '/dashboard/subscribers/list'
    }
  ]
};

export default subscribers;
