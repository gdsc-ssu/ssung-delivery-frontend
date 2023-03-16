import * as XLSX from 'xlsx';
import { ChangeEvent, useState } from 'react';
import styled from '@emotion/styled'
import { ComponentContainer } from '@common/ssung-ui';

interface ExcelData {
  [key: string]: unknown;
}

interface JSONData {
  [key: string]: unknown;
}


/** 1. Read input Excel File
 *  2. convert Excel to Table
 */
const ExcelUploadComponent = () => {
  const [excelData, setExcelData] = useState<any[][]>([]);

  function handleFileUpload(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    /** Excel file reader */
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = e.target?.result as string;
      const workbook = XLSX.read(data, { type: 'binary' });

      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const newData: unknown[][] = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      setExcelData(newData);
    };

    reader.readAsBinaryString(file);
  }

  return (
    <ComponentContainer>
      <FileInputBtn htmlFor="file">엑셀 파일 업로드</FileInputBtn>
      <Input type="file" name="file" id="file" onChange={handleFileUpload} />
      <CustomTable>
        <tbody>
          {excelData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cellData, cellIndex) => (
                <td key={cellIndex}>{cellData}</td>
              ))}
            </tr>
          ))}
        </tbody>
        {/* {console.log(convertToJSON(excelData))} */}
      </CustomTable>
    </ComponentContainer>
  );
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

const FileInputBtn = styled.label`
  width: 150px;
  height: 30px;
  background: #fff;
  position: relative;
  border: 1px solid rgb(77,77,77);
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: rgb(77,77,77);
    color: #fff;
  }
`;

const Input = styled.input`
  display: none;
`;

const CustomTable = styled.table`
  width: 40rem;
  height: 10rem;
  max-height: 25rem;
  border: 1px solid var(--primary);
  text-align: center;
  margin: 5rem auto;
  border-radius: 5rem;
`;


export default ExcelUploadComponent;
