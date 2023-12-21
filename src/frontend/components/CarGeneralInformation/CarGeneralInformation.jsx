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
} from './CarGeneralInformation.styled';

import React, { useState } from 'react';
import ModalMainField from '../ModalMainField/ModalMainField';
import ModalFuel from '../ModalFuel/ModalFuel';

const CarGeneralInformation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFuelExpensesModalOpen, setIsFuelExpensesModalOpen] = useState(false);

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

  return (
    <MainContainer>
      <BtnSection>
        <SectionHead>
          <StyledTitle>Дорожній лист</StyledTitle>
          <BtnBox>
            <InfoBtn onClick={openModal}>Додати загальну інформацію</InfoBtn>
            <InfoBtn onClick={openFuelExpensesModal}>Додати витрати ПММ</InfoBtn>
            <SaveBtn>Зберегти в PDF</SaveBtn>
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
              <Space className="w-[109px] ml-4"></Space>
            </Title>
            <ParagraphContainer className="flex items-end gap-10">
              <Paragraph className="ml-[65px] whitespace-nowrap pt-4">
                Марка машини
                <Space className="ml-2 w-[140px]"></Space>
              </Paragraph>
              <Paragraph>
                Номерний знак машини <Space className="ml-2 w-[140px]"></Space>
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
                <Space className="ml-2 w-[140px]"></Space>
              </Paragraph>
            </ParagraphContainer>
            <ParagraphContainer className="flex items-end gap-10">
              <Paragraph className="ml-[65px] pt-4">
                У розпорядження <Space className="ml-2 w-[185px]"></Space>
              </Paragraph>
              <Paragraph>
                Маршрут руху <Space className="ml-2 w-[320px]"></Space>
              </Paragraph>
            </ParagraphContainer>
            <ParagraphContainer className="flex items-end gap-6">
              <Paragraph className="ml-[65px] pt-4">
                Дорожній лист отримав <Space className="ml-2 w-[522px]"></Space>
              </Paragraph>
              <Paragraph>
                "<Space className="w-9"></Space>"
                <Space className="ml-2 w-[53px] mr-2"></Space>
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
                Дійсний до "<Space className="w-[32px]"></Space>"
                <Space className="w-[53px] mr-1.5 ml-4"></Space> 2023 року
              </Paragraph>
              <Title className=" text-center pt-3">
                Дорожній лист №<Space className="w-[109px] ml-4"></Space>
              </Title>
              <Paragraph className=" pl-32 pb-4 pt-5">
                Військова частина (підрозділ)
                <Space className="w-[216px] ml-2"></Space>
              </Paragraph>
              <ParagraphContainer className=" pl-32 flex gap-10 pt-5">
                <Paragraph>
                  Водій<Space className="w-[385px] ml-2"></Space>
                </Paragraph>
                <Paragraph>
                  Старший машини<Space className="w-[385px] ml-2"></Space>
                </Paragraph>
              </ParagraphContainer>
              <ParagraphContainer className="flex gap-[369px]">
                <Riddle className="ml-[295px]">
                  (військове звання, прізвище,ініціали)
                </Riddle>
                <Riddle>(військове звання, прізвище,ініціали)</Riddle>
              </ParagraphContainer>
              <Paragraph className="pl-32 pt-5">
                Маршрут руху<Space className="ml-2 w-[803px]"></Space>
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
            </StyledTable2>
          </TableSection2>
        </PaperSection>
      </PaperWrapper>
      {isModalOpen && <ModalMainField onClose={closeModal} />}
      {isFuelExpensesModalOpen && <ModalFuel onCloseFuel={closeFuelExpensesModal} />}
    </MainContainer>
  );
};

export default CarGeneralInformation;
