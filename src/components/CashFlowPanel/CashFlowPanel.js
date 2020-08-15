import React from 'react';
import { useQuarterlyCashflowAsReported } from '../../hooks/useMorningStar';

const CashFlowPanel = ({ stockSymbol }) => {
  const cashflowData = useQuarterlyCashflowAsReported({ stockSymbol });
  console.log({ cashflowData });
  return <div>Cash Flow</div>;
};

export default CashFlowPanel;
