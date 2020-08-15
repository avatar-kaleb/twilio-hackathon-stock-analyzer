import React, { useEffect, useState } from 'react';
import { useConvenientKeyRatiosStatistics } from '../../hooks/useMorningStar';
import { keyRatiosByDateRange } from '../../utils/tableTransformers';
import RatiosCard from '../RatiosCard/RatiosCard';
import './RatiosPanel.scss';

const RatiosPanel = ({ stockSymbol }) => {
  const [dateRanges, setDateRanges] = useState([]);
  const [ratiosPerDateRange, setRatiosPerDateRange] = useState({});
  const [selectedDateRange, setSelectedDateRange] = useState(null);
  const ratioData = useConvenientKeyRatiosStatistics({ stockSymbol });

  useEffect(() => {
    if (ratioData && ratioData.results) {
      const { dateRanges, ratiosPerDateRange } = keyRatiosByDateRange(ratioData.results);
      setDateRanges(dateRanges);
      setRatiosPerDateRange(ratiosPerDateRange);
      setSelectedDateRange(dateRanges[0]);
    }
  }, [ratioData]);

  console.log({ dateRanges, ratiosPerDateRange });
  console.log(ratiosPerDateRange[selectedDateRange]);

  return (
    dateRanges.length &&
    selectedDateRange && (
      <div className="ratios-panel">
        <RatiosCard
          entries={Object.entries(ratiosPerDateRange[selectedDateRange].keyRatioFinancialsSection)}
          title={'Key Financial Ratios'}
        />
        <RatiosCard
          entries={Object.entries(
            ratiosPerDateRange[selectedDateRange].keyRatioStatisticsSection
              .financialHealthBalanceSheetSection
          )}
          title={'Financial Health Balance Sheet Ratios'}
        />
        <RatiosCard
          entries={Object.entries(
            ratiosPerDateRange[selectedDateRange].keyRatioStatisticsSection
              .marginsPercentageOfSalesSection
          )}
          title={'Margins Percentages of Sales Card'}
        />
        <RatiosCard
          entries={Object.entries(
            ratiosPerDateRange[selectedDateRange].keyRatioStatisticsSection.profitabilitySection
          )}
          title={'Profitability Ratios'}
        />
        <RatiosCard
          entries={Object.entries(
            ratiosPerDateRange[selectedDateRange].keyRatioStatisticsSection.cashflowRatiosSection
          )}
          title={'Cash Flow Ratios'}
        />
        <RatiosCard
          entries={Object.entries(
            ratiosPerDateRange[selectedDateRange].keyRatioStatisticsSection
              .financialHealthLiquiditySection
          )}
          title={'Financial Health Liquidity Ratios'}
        />

        <RatiosCard
          entries={Object.entries(
            ratiosPerDateRange[selectedDateRange].keyRatioStatisticsSection.efficiencyRatiosSection
          )}
          title={'Efficiency Ratios'}
        />

        {/* TODO growth sections */}
      </div>
    )
  );
};

export default RatiosPanel;
