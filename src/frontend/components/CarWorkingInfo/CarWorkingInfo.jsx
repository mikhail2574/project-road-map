import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectRoadType, selectRoutes } from 'redux/infos/selectors';
import { components } from 'react-select';
import { VscChevronDown } from 'react-icons/vsc';
import {
  fetchInfosThunk,
  // updateRoadTypesThunk,
  // updateRoutesThunk,
} from 'redux/infos/operations';
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
  TBodyRow,
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
  TFootRow,
  THeadRow,
  StyledSelect,
} from './CarWorkingInfo.styled';

const CarWorkingInfo = () => {
  const dispatch = useDispatch();
  const routes = useSelector(selectRoutes);
  const roadType = useSelector(selectRoadType);
  useEffect(() => {
    dispatch(fetchInfosThunk());
  }, [dispatch]);
  console.log('routes :>> ', routes);
  console.log('roadType :>> ', roadType);

  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <VscChevronDown />
      </components.DropdownIndicator>
    );
  };

  const driverArr = ['Фара К.Л.', 'Орел Ф.І.'];
  const checkedArr = [
    'Солдат',
    'Старший солдат',
    'Молодший сержант',
    'Сержант',
  ];
  const driverOptions = driverArr.map(name => ({
    value: name,
    label: name,
  }));
  const checkedOptions = checkedArr.map(rank => ({
    value: rank,
    label: rank,
  }));

  const addGenInfo = () => {}; // ????

  const openEditModal = () => {}; // waiting for modal

  const savePDF = () => {};

  const printPDF = () => {};

  return (
    <>
      <BtnSection>
        <SectionHead>
          <StyledTitle>Дорожній лист</StyledTitle>
          <BtnBox>
            <InfoBtn onClick={addGenInfo}>Додати загальну інформацію</InfoBtn>
            <InfoBtn onClick={openEditModal}>Редагувати</InfoBtn>
            <SaveBtn onClick={savePDF}>Зберегти в PDF</SaveBtn>
            <SaveBtn onClick={printPDF}>Друк сторінки</SaveBtn>
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
              <THeadRow>
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
              </THeadRow>
              <SubRow>
                <th scope="col" rowSpan={2}>
                  Вибуття
                </th>
                <th scope="col" rowSpan={2}>
                  Прибуття
                </th>
                <th scope="col" rowSpan={2}>
                  З ванта жом
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
                <th scope="col">З приче пом</th>
                <th scope="col">На буксир</th>
              </SubSubRow>
            </StyledTHead>
            <StyledTBody>
              <TBodyRow>
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
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </TBodyRow>
              <TBodyRow>
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
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </TBodyRow>
              {/* collection.map(item=>(
            <TBodyRow>
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
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </TBodyRow>)
            ) */}
            </StyledTBody>
            <StyledTFoot>
              <TFootRow>
                <th scope="row">Всього:</th>
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
                <td></td>
                <td></td>
                <td></td>
              </TFootRow>
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
            <StyledSelect
              options={driverOptions}
              // onChange={}
              components={{ DropdownIndicator }}
              ariaLabel={'Військове звання'}
              placeholder="Військове звання"
              classNamePrefix="Select"
            />
            <input type={'text'} placeholder={'Прізвище, ініціали'} />
          </InputWrapper>
        </PersonnelDiv>
        <PersonnelDiv>
          <p>Правильність оформлення дорожнього листа перевірив:</p>
          <AuxWrapper>
            <InputWrapper>
              <StyledSelect
                options={checkedOptions}
                // onChange={}
                components={{ DropdownIndicator }}
                ariaLabel={'Військове звання'}
                placeholder="Військове звання"
                classNamePrefix="Select"
              />
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
