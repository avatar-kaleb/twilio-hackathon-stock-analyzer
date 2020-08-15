export function keyRatiosByDateRange(ratioData) {
  const ratiosPerDateRange = {};
  const dateRanges = [];

  if (ratioData) {
    ratioData.forEach((item) => {
      const dateRange = `${item.startDate} to ${item.endDate}`;
      dateRanges.push(dateRange);
      ratiosPerDateRange[dateRange] = {
        keyRatioFinancialsSection: item.keyRatioFinancialsSection,
        keyRatioStatisticsSection: item.keyRatioStatisticsSection,
      };
    });
  }

  return { dateRanges, ratiosPerDateRange };
}
