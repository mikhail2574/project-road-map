import { useDispatch } from 'react-redux';
import {
  BtnBox,
  BtnSection,
  SectionHead,
  InfoBtn,
  SaveBtn,
  StyledTitle,
  StyledLink,
  StyledNav,
  StyledText,
  StyledSpan,
  Line,
  StyledTHead,
  THeadRow,
  SubRow,
} from '../CarWorkingInfo/CarWorkingInfo.styled';

import {
  MainContainer,
  PaperSection,
  VerticalContainer,
  HorizontalContainer,
  MainInformationContainer,
  Paragraph,
  ParagraphContainer,
  Title,
  Riddle,
  Space,
  PaperWrapper,
  TableSection,
  StyledTable,
  StyledTBody,
  Accent,
  StyledTable2,
  TableSection2,
  StyledTHead2,
  TableSection3,
  StyledTable3,
  StyledTHead3,
} from './CarGeneralInformation.styled';
import downloadMainList from '../../../redux/download/operations';

import React, { useEffect, useState } from 'react';
import ModalMainField from '../ModalMainField/ModalMainField';
import ModalFuel from '../ModalFuel/ModalFuel';

const CarGeneralInformation = () => {
  const dispatch = useDispatch();

  const mockData = {
    supervisor: {
      name: 'Кумар М.Б.',
      rank: 'капітан',
      position: 'Начальник автомобільної служби',
    },
    engineer: {
      name: 'Дизель В.М.',
      rank: 'солдат',
      position: 'Начальник КТП',
    },
    route: 'Київ - Вінниця',
    documentDate: '15.10.2024',
    expireDate: '17.10.2024',
    checkedDate: '16.10.2024',
    documentNumber: '123456',
    dutyNumber: '25',
    militaryUnit: 'А1234',

    car: {
      carSign: 'AA1234FF',
      carName: 'ЗІЛ-131',
      fuelConsumption: 11.5,
      fuelType: 'ДТ',
      exploitationGroup: 'Транспорт',
      driver: {
        name: 'Петренко В.В.',
        rank: 'солдат',
        position: 'Водій',
      },
    },
    formal: {
      departureTime: '7:30 29.09.2023',
      arrivalTime: '18:10 29.09.2023',
    },
    expenses: [
      {
        name: 'Масло',
        amountBefore: 10,
        amountDuring: 5,
        expense: 5,
        byNorm: 5,
        economy: 0,
        overExpense: 0,
        code: 24,
        got: 5,
        date: '29.09.2023',
      },
    ],
    facts: [
      {
        departure: { time: '1 29.09.2023', odometer: 12337 },
        arrival: { time: '2 29.09.2023', odometer: 12338 },
      },
      {
        departure: { time: '3 30.09.2023', odometer: 12339 },
        arrival: { time: '4 30.09.2023', odometer: 12340 },
      },
      {
        departure: { time: '7:30 01.10.2023', odometer: 12340 },
        arrival: { time: '18:10 01.10.2023', odometer: 12345 },
      },
      {
        departure: { time: '7:30 02.10.2023', odometer: 12345 },
        arrival: { time: '18:10 02.10.2023', odometer: 12349 },
      },
      {
        departure: { time: '7:30 03.10.2023', odometer: 12349 },
        arrival: { time: '18:10 03.10.2023', odometer: 12353 },
      },
    ],
    routes: [
      {
        from: 'Київ',
        to: 'Вінниця',
        return: 'ні',
        depTime: '7:30, 29.00.23',
        arrTime: '18:10, 29.00.23',
        mileage: {
          withCargo: 10,
          withoutCargo: 10,
          total: 20,
          withTrailer: '',
          withTug: '',
        },
        motorHours: { onStay: 10, onMove: 50, sum: 60 },
        work: { nameCargo: 'Пісок', weight: 15 },
        odometer: 12354,
      },
    ],
    totalMileage: 1557,
    totalExpense: 50,
    checkPerson: {
      name: 'Петрович А.І.',
      rank: 'сержант',
      position: 'Караульний',
    },
  };

  const handleClick = () => {
    dispatch(downloadMainList(mockData))
      .unwrap()
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        const date = new Date().toLocaleDateString();
        a.download = `roadList#${date}.xlsx`;
        document.body.appendChild(a);
        a.click();
        a.remove();
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFuelExpensesModalOpen, setIsFuelExpensesModalOpen] = useState(false);
  const [duplicated, setDuplicated] = useState(0);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openFuelExpensesModal = () => {
    setIsFuelExpensesModalOpen(true);
  };

  const closeFuelExpensesModal = () => {
    setIsFuelExpensesModalOpen(false);
  };

  const [modalDataMain, setModalDataMain] = useState([]);
  const [modalData, setModalData] = useState([]);
  const pmmMarkup = [];
  let firstTableMarkup = [];
  const handleFuelData = data => {
    // Обработка данных, полученных из модального окна (например, обновление состояния или выполнение других действий)
    setModalData(data);
  };
  console.log(modalData);

  if (modalDataMain.carName) {
    for (let i = 0; i < modalDataMain.departureDate.length; i++) {
      firstTableMarkup.push(
        <StyledTBody key={i}>
          <td>{modalDataMain.seniorTechUnitRank}</td>
          <td>{modalDataMain.seniorTechUnit.label}</td>
          <td>{modalDataMain.departureDate[i].toLocaleDateString()}</td>
          <td>{modalDataMain.seniorCarRank}</td>
          <td>{modalDataMain.senior.label}</td>
          <td>{modalDataMain.departureDate[i].toLocaleDateString()}</td>
          <td>
            {modalDataMain.departureTime[i] +
              ' ' +
              modalDataMain.departureDate[i].toLocaleDateString()}
          </td>
          <td>{modalDataMain.speedOmeter[i]}</td>
          <td>
            {modalDataMain.departureTime[i] +
              ' ' +
              modalDataMain.departureDate[i].toLocaleDateString()}
          </td>
          <td>{modalDataMain.speedOmeterArrival[i]}</td>
        </StyledTBody>
      );
    }
  }
  if (modalData.availability_0) {
    for (let i = 0; i < duplicated; i++) {
      pmmMarkup.push(
        <StyledTBody key={i}>
          <td>{modalData[`itemName_${i}`]}</td>
          <td>{modalData[`itemCode_${i}`]}</td>
          <td>{modalData[`availabilityBeforeDeparture_${i}`]}</td>
          <td>{modalData[`receivedDate_${i}`].toLocaleDateString()}</td>
          <td>{modalData[`availability_${i}`]}</td>
          <td>{modalData[`received_${i}`]}</td>
          <td>{modalData[`spent_${i}`]}</td>
          <td>{modalData[`norm_${i}`]}</td>
          <td>{modalData[`saving_${i}`]}</td>
          <td>{modalData[`overuse_${i}`]}</td>
        </StyledTBody>
      );
    }
  }
  return (
    <MainContainer>
      <BtnSection>
        <SectionHead>
          <StyledTitle>Дорожній лист</StyledTitle>
          <BtnBox>
            <InfoBtn onClick={openModal}>Додати загальну інформацію</InfoBtn>
            <InfoBtn onClick={openFuelExpensesModal}>
              Додати витрати ПММ
            </InfoBtn>
            <SaveBtn onClick={handleClick}>Зберегти в Excel</SaveBtn>
            <SaveBtn>Друк сторінки</SaveBtn>
          </BtnBox>
        </SectionHead>
        <StyledNav>
          <StyledLink to="/papers/general">Загальна інформація</StyledLink>
          <StyledLink to="/papers/car">Робота машини</StyledLink>
        </StyledNav>
        <Line />
        <StyledText>
          Адреса збереження PDF:{' '}
          <StyledSpan>C:\Users\zdane\Desktop\Шляховий</StyledSpan>
        </StyledText>
      </BtnSection>
      <PaperWrapper>
        <PaperSection>
          <VerticalContainer>
            <Title className="text-center pt-4">
              Корінець дорожнього листа №
              <Space className="w-[109px] ml-4">
                {modalDataMain.numberDocument}
              </Space>
            </Title>
            <ParagraphContainer className="flex items-end gap-10">
              <Paragraph className="ml-[65px] whitespace-nowrap pt-4">
                Марка машини
                <Space className="ml-2 w-[140px]">
                  {modalDataMain.carName}
                </Space>
              </Paragraph>
              <Paragraph>
                Номерний знак машини{' '}
                <Space className="ml-2 w-[140px]">
                  {/* {modalDataMain.sign.label} */}
                </Space>
              </Paragraph>
              <Paragraph>
                Марка причепа <Space className="ml-2 w-[140px]"></Space>
              </Paragraph>
            </ParagraphContainer>
            <ParagraphContainer className="flex items-end gap-10">
              <Paragraph className="ml-[65px] pt-4">
                Номерний знак причепа
                <Space className="ml-2 w-[140px]"></Space>
              </Paragraph>
              <Paragraph>
                Група експлуатації
                <Space className="ml-2 w-[140px]">
                  {modalDataMain.exploitationGroup}
                </Space>
              </Paragraph>
            </ParagraphContainer>
            <ParagraphContainer className="flex items-end gap-10">
              <Paragraph className="ml-[65px] pt-4">
                У розпорядження <Space className="ml-2 w-[185px]"></Space>
              </Paragraph>
              <Paragraph>
                Маршрут руху{' '}
                <Space className="ml-2 w-[320px]">
                  {modalDataMain.trafficRoute}
                </Space>
              </Paragraph>
            </ParagraphContainer>
            <ParagraphContainer className="flex items-end gap-6">
              <Paragraph className="ml-[65px] pt-4">
                Дорожній лист отримав
                <Space className="ml-2 w-[522px]"></Space>
              </Paragraph>
              <Paragraph>
                "
                <Space className="w-9 text-center">
                  {modalDataMain.documentDate
                    ? modalDataMain.documentDate.getDay()
                    : ''}
                </Space>
                "
                <Space className="ml-2 w-[53px] mr-2 text-xs">
                  {modalDataMain.documentDate
                    ? modalDataMain.documentDate.toLocaleString('uk-ua', {
                        month: 'long',
                      })
                    : ''}
                </Space>
                2024 року
              </Paragraph>
            </ParagraphContainer>
            <Riddle className="text-center">
              (підпис, прізвище, ініціали)
            </Riddle>
          </VerticalContainer>
          <HorizontalContainer>
            <MainInformationContainer className="w-[1169px] float-right">
              <Paragraph className=" text-center pt-5">
                Дійсний до "
                <Space className="w-[32px]">
                  {modalDataMain.documentDate
                    ? modalDataMain.documentDate.getDay()
                    : ''}
                </Space>
                "
                <Space className="w-[53px] mr-1.5 ml-4 text-xs">
                  {modalDataMain.documentDate
                    ? modalDataMain.documentDate.toLocaleString('uk-ua', {
                        month: 'long',
                      })
                    : ''}
                </Space>{' '}
                2024 року
              </Paragraph>
              <Title className=" text-center pt-3">
                Дорожній лист №
                <Space className="w-[109px] ml-4">
                  {modalDataMain.numberDocument}
                </Space>
              </Title>
              <Paragraph className=" pl-32 pb-4 pt-5">
                Військова частина (підрозділ)
                <Space className="w-[216px] ml-2">{modalDataMain.unit}</Space>
              </Paragraph>
              <ParagraphContainer className=" pl-32 flex gap-10 pt-5">
                <Paragraph>
                  Водій
                  <Space className="w-[385px] ml-2">
                    {modalDataMain.driver}
                  </Space>
                </Paragraph>
                <Paragraph>
                  Старший машини
                  <Space className="w-[385px] ml-2">
                    {modalDataMain.senior ? modalDataMain.senior.label : ''}
                  </Space>
                </Paragraph>
              </ParagraphContainer>
              <ParagraphContainer className="flex gap-[369px]">
                <Riddle className="ml-[295px]">
                  (військове звання, прізвище,ініціали)
                </Riddle>
                <Riddle>(військове звання, прізвище,ініціали)</Riddle>
              </ParagraphContainer>
              <Paragraph className="pl-32 pt-5">
                Маршрут руху
                <Space className="ml-2 w-[803px]">
                  {modalDataMain.trafficRoute}
                </Space>
              </Paragraph>
              <Space className="pt-6 ml-32 w-[908px]"></Space>
              <ParagraphContainer className="flex gap-[335px]">
                <Riddle className="ml-[128px]">М.П.</Riddle>
                <Riddle>
                  (посада, військове звання, підпис, прізвище,ініціали)
                </Riddle>
              </ParagraphContainer>
            </MainInformationContainer>
          </HorizontalContainer>
          <TableSection>
            <StyledTable>
              <StyledTHead>
                <THeadRow>
                  <th scope="col" colSpan={3} rowSpan={2}>
                    Машина технічно справна
                    <Accent className="text-sm mt-2">
                      Старший (технік) підрозділу
                    </Accent>
                  </th>
                  <th scope="col" colSpan={3} rowSpan={2}>
                    Технічний стан машини перевірив
                    <Accent className="text-sm mt-2">Начальник КТП</Accent>
                  </th>

                  <th scope="colgroup" colSpan={2}>
                    <Accent className="text-sm mt-2">Вибуття</Accent>
                  </th>
                  <th scope="colgroup" colSpan={2}>
                    <Accent className="text-sm mt-2">Прибуття</Accent>
                  </th>
                </THeadRow>
                <SubRow>
                  <th scope="col">За нарядом</th>
                  <th scope="col">
                    <Accent>0:00 00.00.0000</Accent>
                  </th>
                  <th scope="col">За нарядом</th>
                  <th scope="col">
                    <Accent>0:00 00.00.0000</Accent>
                  </th>
                </SubRow>
              </StyledTHead>
              {firstTableMarkup.length ? (
                firstTableMarkup
              ) : (
                <StyledTBody>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </StyledTBody>
              )}
            </StyledTable>
          </TableSection>
          <TableSection2>
            <StyledTable2>
              <StyledTHead2>
                <THeadRow>
                  <th scope="colgroup">Номер документа</th>
                  <th scope="colgroup">Дата документа</th>
                  <th scope="colgroup">Підстава (мета виписки)</th>
                  <th scope="colgroup">Марка машини</th>
                  <th scope="colgroup">Номерний знак машини</th>
                  <th scope="colgroup">Марка причепа</th>
                  <th scope="colgroup">Номерний знак причепа </th>
                  <th scope="colgroup">Група експлуатації</th>
                  <th scope="colgroup">Вантаж, що перевозиться</th>
                  <th scope="colgroup">Маса вантажу,т</th>
                </THeadRow>
              </StyledTHead2>
              <StyledTBody>
                <td>{modalDataMain.numberDocument}</td>
                <td>
                  {modalDataMain.documentDate
                    ? modalDataMain.documentDate.toLocaleDateString()
                    : ''}
                </td>
                <td>{modalDataMain.purposeStatement}</td>
                <td>{modalDataMain.carName}</td>
                <td>{modalDataMain.sign ? modalDataMain.sign.label : ''}</td>
                <td></td>
                <td></td>
                <td>{modalDataMain.exploitationGroup}</td>
                <td></td>
                <td></td>
              </StyledTBody>
            </StyledTable2>
          </TableSection2>
          <TableSection3>
            <Paragraph className="text-center mb-4">
              Витрата пально-мастильних матеріалів (у літрах)
            </Paragraph>
            <StyledTable3>
              <StyledTHead3>
                <THeadRow>
                  <th scope="colgroup">Найменування ПММ</th>
                  <th scope="colgroup">Код номенклатури</th>
                  <th scope="colgroup">Наявність перед виїздом</th>
                  <th scope="colgroup" colSpan={2}>
                    Отримано
                  </th>
                  <th scope="colgroup">
                    Наявність під час постановки на стоянку
                  </th>
                  <th scope="colgroup">Витрачено</th>
                  <th scope="colgroup">Належить за нормою </th>
                  <th scope="colgroup">Економія </th>
                  <th scope="colgroup">Перевитрата</th>
                </THeadRow>
              </StyledTHead3>
              {pmmMarkup.length ? (
                pmmMarkup
              ) : (
                <StyledTBody>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </StyledTBody>
              )}
            </StyledTable3>
          </TableSection3>
        </PaperSection>
      </PaperWrapper>
      {isModalOpen && (
        <ModalMainField
          onClose={closeModal}
          setModalDataMain={setModalDataMain}
        />
      )}
      {isFuelExpensesModalOpen && (
        <ModalFuel
          onCloseFuel={closeFuelExpensesModal}
          onSubmitCallback={handleFuelData}
          setDuplicated={setDuplicated}
        />
      )}
    </MainContainer>
  );
};
// modalSubmit={setModalData}
export default CarGeneralInformation;
