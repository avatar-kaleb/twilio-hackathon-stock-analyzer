import { Classes, InputGroup, Tab, Tabs } from '@blueprintjs/core';
import React, { useState } from 'react';
import CashFlowPanel from '../components/CashFlowPanel/CashFlowPanel';
import RatiosPanel from '../components/RatiosPanel/RatiosPanel';
import './StockAnalyzer.scss';

const StockAnalyzer = () => {
  const [stockSymbol, setStockSymbol] = useState('GE');

  return (
    <>
      <InputGroup
        className={Classes.FILL}
        type="text"
        placeholder="Search..."
        intent="none"
        onChange={(e) => setStockSymbol(e.target.value)}
        value={stockSymbol}
      />
      <Tabs
        animate={true}
        id="TabsExample"
        key={'vertical'}
        renderActiveTabPanelOnly={true}
        vertical={true}
        className="tabs"
        large
      >
        <Tab id="aboutCompany" title="About Company" panel={<div>About Company</div>} />
        <Tab
          id="ratios"
          disabled={stockSymbol === ''}
          title="Ratios"
          panel={<RatiosPanel stockSymbol={stockSymbol} />}
        />
        <Tab
          id="cashFlow"
          disabled={stockSymbol === ''}
          title="Cash Flow"
          panel={<CashFlowPanel stockSymbol={stockSymbol} />}
        />
        <Tab
          id="balanceSheet"
          disabled={stockSymbol === ''}
          title="Balance Sheet"
          panel={<div>Balance Sheet</div>}
        />
        <Tab
          id="incomeStatement"
          disabled={stockSymbol === ''}
          title="Income Statement"
          panel={<div>Income Statement</div>}
        />
        <Tab id="charts" disabled={stockSymbol === ''} title="Charts" panel={<div>Charts</div>} />
        <Tab
          id="history"
          disabled={stockSymbol === ''}
          title="History"
          panel={<div>History</div>}
        />
        <Tab id="news" disabled={stockSymbol === ''} title="News" panel={<div>News</div>} />
        <Tabs.Expander />
      </Tabs>
    </>
  );
};

export default StockAnalyzer;
