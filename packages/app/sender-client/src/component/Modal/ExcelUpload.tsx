import * as XLSX from 'xlsx';
import { ChangeEvent, useState } from 'react';
import styled from '@emotion/styled'
import { ComponentContainer, Flex, Spacer, Title } from '@common/ssung-ui';

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
    checkFileExtension(file);
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
      <Spacer height="2rem" />
      <Flex flexDirection={"row"}>
        <Title style={{"float":"left"}}>운송정보 엑셀 업로드</Title>
        <Flex flexDirection={"row"} justifyContent={'center'}
          style={{"width":"20rem", "float":"right", "marginLeft":"22rem"}}
        >
          <CustomBtn htmlFor="file">엑셀 파일 열기</CustomBtn>
          <CustomBtn onClick={() => convertToJSON(excelData)}>업로드</CustomBtn>
        </Flex>
      </Flex>
      <Input type="file" name="file" id="file" onChange={handleFileUpload} />
      <TableContainer>
        <CustomTable>
          <CustomTbody>
            {excelData.map((row, rowIndex) => (
              <CustomTr key={rowIndex}>
                {row.map((cellData, cellIndex) => (
                  <CustomTd key={cellIndex}>{cellData}</CustomTd>
                ))}
              </CustomTr>
            ))}
          </CustomTbody>
          {/* {console.log(convertToJSON(excelData))} */}
        </CustomTable>
      </TableContainer>
    </ComponentContainer>
  );
}

/**
 * check .xlsx extension
 */
const checkFileExtension = (file: File) => {
  const extention = file.name.split('.').pop();
  if (extention !== 'xlsx' && extention !== 'csv') {
    alert("Only files with '.xlsx' or '.csv' extensions can be entered.")
    return;
  }
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

const CustomBtn = styled.label`
  width: 10rem;
  height: 2rem;
  margin: auto 0.2rem;
  background: #fff;
  color: var(--sub-text);
  border: 0.1rem solid lightgray;
  box-shadow: 3px 3px 3px lightgray;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: var(--primary);
    color: #fff;
  }
`;

const Input = styled.input`
  display: none;
`;

const TableContainer = styled.div`
  width: 50rem;
  height: 20rem;
  max-width: 50rem;
  max-height: 20rem;
  padding: 1rem;
  overflow: auto;
  margin: 1rem auto;
  text-align: center;
`;

const CustomTable = styled.table`
  width: 50rem;
  min-width: 50rem;
  height: 20rem;
  max-height: 20rem;
  font-size: 1rem;
`;

const CustomTbody = styled.tbody`
  border-radius: 1rem;
  border-collapse: collapse;
  border: 1px soild var(--primary);
`;

const CustomTr = styled.tr`
  border: 0.1rem solid var(--primary);
`;

const CustomTd = styled.td`
  border: 0.1rem solid var(--primary);
  padding: 0.5rem 0.2rem;
`;

export default ExcelUploadComponent;
