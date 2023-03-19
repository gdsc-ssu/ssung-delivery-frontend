export interface ExcelData {
    [key: string]: unknown;
}
  
export interface JSONData {
    [key: string]: unknown;
}

/**
 * convert Excel to JSON data
 */
const convertToJSON = (excelData: ExcelData[]): JSONData[] => {
    const jsonData: JSONData[] = excelData.map((data) => {
      const jsonData: JSONData = {};
      Object.keys(data).forEach((key) => {
        const value = data[key];
        if (typeof value === 'string') {
          jsonData[key] = value.trim();
        } else {
          jsonData[key] = value;
        }
      });
      return jsonData;
    });
    console.log(jsonData)
    return jsonData;
};

export default convertToJSON