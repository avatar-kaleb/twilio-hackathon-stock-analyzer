import { useEffect, useState } from 'react';
import {
  companiesGetCompanyProfileMock,
  convenientKeyRatiosMock,
  dividendsMock,
  endOfDayQuotesHistoryMock,
  keyRatiosStatisticsMock,
  quarterlyBalanceSheetAsReportedMock,
  quarterlyCashFlowAsReportedMock,
  quarterlyIncomeStatementsAsReportedMock,
  stockSplitsMock,
  yearlyBalanceSheetAsReportedMock,
  yearlyCashflowAsReportedMock,
  yearlyIncomeStatementsAsReportedMock,
} from '../mockResponses/morningStar';

const mode = 'MOCK';

export const useQuarterlyCashflowAsReported = ({ stockSymbol }) => {
  const [quarterlyCashflowAsReported, setQuarterlyCashflowsAsReported] = useState({});

  useEffect(() => {
    if (mode === 'MOCK' && stockSymbol) {
      setTimeout(() => {
        setQuarterlyCashflowsAsReported(quarterlyCashFlowAsReportedMock);
      }, 1000);
    }
  });

  return quarterlyCashflowAsReported;
};

export const useYearlyCashflowAsReported = ({ stockSymbol }) => {
  const [yearlyCashflowAsReported, setYearlyCashflowsAsReported] = useState({});

  useEffect(() => {
    if (mode === 'MOCK' && stockSymbol) {
      setTimeout(() => {
        setYearlyCashflowsAsReported(yearlyCashflowAsReportedMock);
      }, 1000);
    }
  });

  return yearlyCashflowAsReported;
};

export const useQuarterlyIncomeStatementAsReported = ({ stockSymbol }) => {
  const [quarterlyIncomeStatementAsReported, setQuarterlyIncomeStatementsAsReported] = useState({});

  useEffect(() => {
    if (mode === 'MOCK') {
      setTimeout(() => {
        setQuarterlyIncomeStatementsAsReported(quarterlyIncomeStatementsAsReportedMock);
      }, 1000);
    }
  });

  return quarterlyIncomeStatementAsReported;
};

export const useYearlyIncomeStatementAsReported = ({ stockSymbol }) => {
  const [yearlyIncomeStatementAsReported, setYearlyIncomeStatementsAsReported] = useState({});

  useEffect(() => {
    if (mode === 'MOCK') {
      setTimeout(() => {
        setYearlyIncomeStatementsAsReported(yearlyIncomeStatementsAsReportedMock);
      }, 1000);
    }
  });

  return yearlyIncomeStatementAsReported;
};

export const useQuarterlyBalanceSheetAsReported = ({ stockSymbol }) => {
  const [quarterlyBalanceSheetAsReported, setQuarterlyBalanceSheetAsReported] = useState({});

  useEffect(() => {
    if (mode === 'MOCK') {
      setTimeout(() => {
        setQuarterlyBalanceSheetAsReported(quarterlyBalanceSheetAsReportedMock);
      }, 1000);
    }
  });

  return quarterlyBalanceSheetAsReported;
};

export const useYearlyBalanceSheetAsReported = ({ stockSymbol }) => {
  const [yearlyBalanceSheetAsReported, setYearlyBalanceSheetAsReported] = useState({});

  useEffect(() => {
    if (mode === 'MOCK') {
      setTimeout(() => {
        setYearlyBalanceSheetAsReported(yearlyBalanceSheetAsReportedMock);
      }, 1000);
    }
  });

  return yearlyBalanceSheetAsReported;
};

export const useKeyRatiosStatistics = ({ stockSymbol }) => {
  const [keyRatiosStatistics, setKeyRatiosStatistics] = useState({});

  useEffect(() => {
    if (mode === 'MOCK') {
      setTimeout(() => {
        setKeyRatiosStatistics(keyRatiosStatisticsMock);
      }, 1000);
    }
  });

  return keyRatiosStatistics;
};

export const useConvenientKeyRatiosStatistics = ({ stockSymbol }) => {
  const [convenientKeyRatiosStatistics, setConvenientKeyRatiosStatistics] = useState({});

  useEffect(() => {
    if (mode === 'MOCK' && stockSymbol) {
      setTimeout(() => {
        setConvenientKeyRatiosStatistics(convenientKeyRatiosMock);
      }, 1000);
    }
  });

  return convenientKeyRatiosStatistics;
};

export const useCompaniesGetCompanyProfile = ({ stockSymbol }) => {
  const [companiesGetCompanyProfile, setCompaniesGetCompanyProfileMock] = useState({});

  useEffect(() => {
    if (mode === 'MOCK') {
      setTimeout(() => {
        setCompaniesGetCompanyProfileMock(companiesGetCompanyProfileMock);
      }, 1000);
    }
  });

  return companiesGetCompanyProfile;
};

export const useDividends = ({ stockSymbol }) => {
  const [dividends, setUseDividends] = useState({});

  useEffect(() => {
    if (mode === 'MOCK') {
      setTimeout(() => {
        setUseDividends(dividendsMock);
      }, 1000);
    }
  });

  return dividends;
};

export const useEndOfDayQuotesHistory = ({ stockSymbol }) => {
  const [endOfDayQuotesHistory, setEndOfDayQuotesHistory] = useState({});

  useEffect(() => {
    if (mode === 'MOCK') {
      setTimeout(() => {
        setEndOfDayQuotesHistory(endOfDayQuotesHistoryMock);
      }, 1000);
    }
  });

  return endOfDayQuotesHistory;
};

export const useStockSplits = ({ stockSymbol }) => {
  const [stockSplits, setStockSplits] = useState({});

  useEffect(() => {
    if (mode === 'MOCK') {
      setTimeout(() => {
        setStockSplits(stockSplitsMock);
      }, 1000);
    }
  });

  return stockSplits;
};
