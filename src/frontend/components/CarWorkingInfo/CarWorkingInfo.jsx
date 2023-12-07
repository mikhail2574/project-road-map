// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectRoadType, selectRoutes } from 'redux/infos/selectors';
// import {
//   fetchInfosThunk,
//   updateRoadTypesThunk,
//   updateRoutesThunk,
// } from 'redux/infos/operations';
import {
  AuxWrapper,
  BtnBox,
  BtnSection,
  CalcDiv,
  InputWrapper,
  PersonnelDiv,
  SectionHead,
  InfoBtn,
  SaveBtn,
  StyledRow,
  StyledTBody,
  StyledTFoot,
  StyledTHead,
  StyledTable,
  StyledTitle,
  SubRow,
  SubSubRow,
  TableScroll,
  TableSection,
  StyledLink,
  StyledNav,
  StyledText,
  StyledSpan,
  Line,
} from './CarWorkingInfo.styled';

const CarWorkingInfo = () => {
  /* const dispatch = useDispatch();
  const routes = useSelector(selectRoutes);
  const roadType = useSelector(selectRoadType);
   useEffect(() => {
    dispatch(fetchInfosThunk());
  }, [dispatch]);
  console.log('routes :>> ', routes);
  console.log('roadType :>> ', roadType); */

  return (
    <>
      <BtnSection>
        <SectionHead>
          <StyledTitle>Дорожній лист</StyledTitle>
          <BtnBox>
            <InfoBtn>Додати загальну інформацію</InfoBtn>
            <InfoBtn>Редагувати</InfoBtn>
            <SaveBtn>Зберегти в PDF</SaveBtn>
            <SaveBtn>Друк сторінки</SaveBtn>
          </BtnBox>
        </SectionHead>
        <StyledNav>
          <StyledLink to="general">Загальна інформація</StyledLink>
          <StyledLink to="car">Робота машини</StyledLink>
        </StyledNav>
        <Line />
        <StyledText>
          Адреса збереження PDF:{' '}
          <StyledSpan>C:\Users\zdane\Desktop\Шляховий</StyledSpan>
        </StyledText>
      </BtnSection>
      <TableSection>
        <TableScroll>
          <StyledTable>
            <StyledTHead>
              <tr>
                <th scope="col" rowSpan={3}>
                  Маршрут руху (звідки, куди)
                </th>
                <th scope="colgroup" colSpan={2}>
                  Дата і час (години, хвилини)
                </th>
                <th scope="colgroup" colSpan={5}>
                  Пройдено кілометрів
                </th>
                <th scope="colgroup" colSpan={3}>
                  Відпрацьовано мотогодин
                </th>
                <th scope="colgroup" colSpan={2}>
                  Виконана робота
                </th>
                <th scope="col" rowSpan={3}>
                  Показанння спідометра, час і місце відпускання машини, підпис
                  старшого машини (особа, яка використовувала машину)
                </th>
              </tr>
              <SubRow>
                <th scope="col" rowSpan={2}>
                  Вибуття
                </th>
                <th scope="col" rowSpan={2}>
                  Прибуття
                </th>
                <th scope="col" rowSpan={2}>
                  З вантажом
                </th>
                <th scope="col" rowSpan={2}>
                  Без
                </th>
                <th scope="col" rowSpan={2}>
                  Усього
                </th>
                <th scope="colgroup" colSpan={2}>
                  У тому числі
                </th>
                <th scope="col" rowSpan={2}>
                  На місці
                </th>
                <th scope="col" rowSpan={2}>
                  Під часу руху
                </th>
                <th scope="col" rowSpan={2}>
                  Усього
                </th>
                <th scope="col" rowSpan={2}>
                  Найменування вантажу
                </th>
                <th scope="col" rowSpan={2}>
                  Кількість
                </th>
              </SubRow>
              <SubSubRow>
                <th scope="col">З причепом</th>
                <th scope="col">На буксир</th>
              </SubSubRow>
            </StyledTHead>
            <StyledTBody>
              <StyledRow>
                <td>placeholder</td>
                <td>placeholder</td>
                <td>placeholder</td>
                <td>placeholder</td>
                <td>placeholder</td>
                <td>placeholder</td>
                <td>placeholder</td>
                <td>placeholder</td>
                <td>placeholder</td>
                <td>placeholder</td>
                <td>placeholder</td>
                <td>placeholder</td>
                <td>placeholder</td>
                <td>placeholder</td>
              </StyledRow>
              <StyledRow>
                <td>placeholder</td>
                <td>placeholder</td>
                <td>placeholder</td>
                <td>placeholder</td>
                <td>placeholder</td>
                <td>placeholder</td>
                <td>placeholder</td>
                <td>placeholder</td>
                <td>placeholder</td>
                <td>placeholder</td>
                <td>placeholder</td>
                <td>placeholder</td>
                <td>placeholder</td>
                <td>placeholder</td>
              </StyledRow>
              <StyledRow>
                <td>placeholder</td>
                <td>placeholder</td>
                <td>placeholder</td>
                <td>placeholder</td>
                <td>placeholder</td>
                <td>placeholder</td>
                <td>placeholder</td>
                <td>placeholder</td>
                <td>placeholder</td>
                <td>placeholder</td>
                <td>placeholder</td>
                <td>placeholder</td>
                <td>placeholder</td>
                <td>placeholder</td>
              </StyledRow>
              {/* collection.map(item=>(
            <StyledRow>
              <td>placeholder</td>
              <td>placeholder</td>
              <td>placeholder</td>
              <td>placeholder</td>
              <td>placeholder</td>
              <td>placeholder</td>
              <td>placeholder</td>
              <td>placeholder</td>
              <td>placeholder</td>
              <td>placeholder</td>
              <td>placeholder</td>
              <td>placeholder</td>
              <td>placeholder</td>
              <td>placeholder</td>
            </StyledRow>)
            ) */}
            </StyledTBody>
            <StyledTFoot>
              <StyledRow>
                <th scope="row">Всього:</th>
                <td>num</td>
                <td>num</td>
                <td>num</td>
                <td>num</td>
                <td>num</td>
                <td>num</td>
                <td>num</td>
                <td>num</td>
                <td>num</td>
                <td>num</td>
                <td>num</td>
                <td>num</td>
                <td>num</td>
              </StyledRow>
            </StyledTFoot>
          </StyledTable>
        </TableScroll>
        <CalcDiv>
          <p>
            Всього пройдено: <span>*calc*</span>
          </p>
          <p>
            Всього витрачено: <span>*calc*</span>
          </p>
        </CalcDiv>
        <PersonnelDiv>
          <p>Водій (механік - водій):</p>
          <InputWrapper>
            <select name={'rank'} defaultValue={'Військове звання'}>
              <option value={'Військове звання'} disabled>
                Військове звання
              </option>
            </select>
            <input type={'text'} placeholder={'Прізвище, ініціали'} />
          </InputWrapper>
        </PersonnelDiv>
        <PersonnelDiv>
          <p>Правильність оформлення дорожнього листа перевірив:</p>
          <AuxWrapper>
            <InputWrapper>
              <select name={'rank'} defaultValue={'Військове звання'}>
                <option value={'Військове звання'} disabled>
                  Військове звання
                </option>
              </select>
              <input type={'text'} placeholder={'Посада'} />
              <input type={'text'} placeholder={'Прізвище, ініціали'} />
            </InputWrapper>
            <input type="date" />
            {/* datepicker */}
          </AuxWrapper>
        </PersonnelDiv>
      </TableSection>
    </>
  );
};

export default CarWorkingInfo;
