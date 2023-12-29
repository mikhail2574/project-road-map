import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import {
  selectPersonnel,
  selectRoadType,
  selectRoutes,
} from 'redux/infos/selectors';
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
import { IconStyleCalendar } from '../CarInfoModal/CarInfoModal.styled';
import CarInfoModal from '../CarInfoModal/CarInfoModal';
import {
  DatePickerOne,
  PickerContainer,
} from '../CarInfoModal/CarInfoModal.styled';

const CarWorkingInfo = () => {
  const [modalData, setModalData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [dataToSend, setDataToSend] = useState({});

  const dispatch = useDispatch();
  const routes = useSelector(selectRoutes);
  const roadType = useSelector(selectRoadType);
  const personnel = useSelector(selectPersonnel);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const {
    handleSubmit,
    control,
    setValue,
    register,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    dispatch(fetchInfosThunk());
  }, [dispatch]);

  console.log('modalData :>> ', modalData);
  console.log('routes :>> ', routes);

  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <VscChevronDown />
      </components.DropdownIndicator>
    );
  };

  const driverArr = personnel.filter(el => el.position === 'водій');
  const checkedArr = [
    'Солдат',
    'Старший солдат',
    'Молодший сержант',
    'Сержант',
  ];
  const driverOptions = driverArr.map(({ name, rank }) => ({
    value: name,
    label: name,
  }));
  const checkedOptions = checkedArr.map(rank => ({
    value: rank,
    label: rank,
  }));

  //* ========================= mock data =========================
  /* const mockData = {
    routes: [
      {
        from: 'Кременець',
        to: 'Тернопіль',
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
    odometer: 12304,
  },
    ],
    totalMileage: 118,
    driver: { name: 'Святий О.Я.', rank: 'солдат' },
    senior: { name: 'Кернес А.О.', rank: 'капітан' },
    fuelConsumption: 10,
  }; */
  // const addData = {};

  const renderInstruction = () => {
    const renderCollection = () => {
      return modalData.map(
        ({
          routeFrom,
          routeTo,
          oneway,
          departureDate,
          departureTime,
          arrivalDate,
          arrivalTime,
          withCargo,
          withoutCargo,
          total,
          withTrailer,
          withTug,
          onStay,
          onMove,
          sum,
          nameCargo,
          weight,
          odometer,
        }) => (
          <TBodyRow>
            <td>
              {routeFrom} - {routeTo}
              {oneway ? ` - ${routeFrom}` : null}
            </td>
            <td>
              {departureTime}, {departureDate}
            </td>
            <td>
              {arrivalTime}, {arrivalDate}
            </td>
            <td>{withCargo}</td>
            <td>{withoutCargo}</td>
            <td>{total}</td>
            <td>{withTrailer}</td>
            <td>{withTug}</td>
            <td>{onStay}</td>
            <td>{onMove}</td>
            <td>{sum}</td>
            <td>{nameCargo}</td>
            <td>{weight}</td>
            <td>{odometer}</td>
          </TBodyRow>
        )
      );
    };
    let emptyRowArr = [];
    for (let i = 0; i < 14; i++) {
      emptyRowArr.push(<td></td>);
    }
    const renderEmpty = () => {
      return <TBodyRow>{emptyRowArr.map(item => item)}</TBodyRow>;
    };
    switch (modalData.length) {
      case 0:
        return (
          <>
            {renderEmpty()}
            {renderEmpty()}
          </>
        );
      case 1:
        return (
          <>
            {renderCollection()}
            {renderEmpty()}
          </>
        );

      default:
        return renderCollection();
    }
  };

  const onSubmit = data => {
    console.log(data);
  };

  const editInfo = () => {}; // ????

  const saveExcel = () => {};

  const totalMil = modalData.reduce((acc, item) => {
    return (acc += Number(item.total));
  }, 0);
  //* Fuel consumption is needed
  const formula =
    (10 * totalMil) / 100 - ((10 * totalMil) / 100) * roadType[0]?.correction;

  return (
    <>
      <BtnSection>
        <SectionHead>
          <StyledTitle>Дорожній лист</StyledTitle>
          <BtnBox>
            <InfoBtn onClick={openModal}>Додати загальну інформацію</InfoBtn>
            <InfoBtn onClick={editInfo}>Редагувати</InfoBtn>
            <SaveBtn onClick={saveExcel}>Зберегти в Excel</SaveBtn>
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
            <StyledTBody>{renderInstruction()}</StyledTBody>
            <StyledTFoot>
              <TFootRow>
                <th scope="row">Всього: </th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>{totalMil || null}</td>
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
            Всього пройдено: <span>{totalMil}</span>
          </p>
          <p>
            Всього витрачено: <span>{formula || 0}</span>
          </p>
        </CalcDiv>
        <form onSubmit={handleSubmit(onSubmit)}>
          <PersonnelDiv>
            <p>Водій (механік - водій):</p>
            <InputWrapper>
              <StyledSelect
                options={driverOptions}
                {...register('driver')}
                onChange={value => console.log(value)}
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
                  {...register('checkMan')}
                  onChange={value => console.log(value)}
                  components={{ DropdownIndicator }}
                  ariaLabel={'Військове звання'}
                  placeholder="Військове звання"
                  classNamePrefix="Select"
                />
                <input type={'text'} placeholder={'Посада'} />
                <input type={'text'} placeholder={'Прізвище, ініціали'} />
              </InputWrapper>
              <Controller
                name="documentDate"
                control={control}
                rules={{
                  required: "Обов'язкове поле",
                  pattern: {
                    value:
                      /^(0[1-9]|1[0-9]|2[0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/,
                    message:
                      'Невірний формат (приклад правильного формату: 01.01.2023)',
                  },
                }}
                render={({ field }) => (
                  <>
                    <PickerContainer>
                      <DatePickerOne
                        selected={field.value}
                        onChange={date => setValue(`documentDate`, date)}
                        dateFormat="dd.MM.yyyy"
                        placeholderText="00.00.0000"
                        showIcon
                        icon={
                          <IconStyleCalendar
                            size={16}
                            height={18}
                            name="dark-calendar"
                          />
                        }
                      />
                      {errors.documentDate && (
                        <span style={{ color: 'red' }}>
                          {errors.documentDate.message}
                        </span>
                      )}
                    </PickerContainer>
                  </>
                )}
              />
            </AuxWrapper>
          </PersonnelDiv>
        </form>
      </TableSection>
      {isModalOpen && (
        <CarInfoModal onClose={closeModal} modalSubmit={setModalData} />
      )}
    </>
  );
};

export default CarWorkingInfo;
