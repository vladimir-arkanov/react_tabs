import classNames from 'classnames';
import React from 'react';
import { Tab } from '../../type/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  setSelectedTab: (tab: Tab) => void,
};

export const Tabs: React.FC<Props>
  = ({ tabs, selectedTabId, setSelectedTab }) => {
    const properTab = tabs.find(element => (
      element.id === selectedTabId
    )) || tabs[0];

    const newSelectedTab = (newTab: Tab) => {
      if (newTab.id !== selectedTabId) {
        setSelectedTab(newTab);
      }
    };

    return (
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                className={classNames(
                  { 'is-active': properTab?.id === tab.id },
                )}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => newSelectedTab(tab)}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {properTab?.content}
        </div>
      </div>
    );
  };
