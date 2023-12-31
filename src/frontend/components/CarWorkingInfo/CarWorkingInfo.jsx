import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { selectPersonnel } from 'redux/infos/selectors';
import { components } from 'react-select';
import { VscChevronDown } from 'react-icons/vsc';
import { fetchInfosThunk } from 'redux/infos/operations';
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
import downloadMainList from 'redux/download/operations';
import { selectCar, selectRoutes } from 'redux/form/selectors';

const CarWorkingInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const routes = useSelector(selectRoutes);
  const personnel = useSelector(selectPersonnel);
  const selectedCar = useSelector(selectCar);

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

  // useEffect(() => {
  //   dispatch(fetchInfosThunk());
  // }, [dispatch]);

  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <VscChevronDown />
      </components.DropdownIndicator>
    );
  };

  const driverArr = personnel.filter(el =>
    el.position.toLowerCase().includes('водій')
  );
  const driverOptions = driverArr.map(({ name, rank }) => ({
    value: rank,
    label: name,
  }));
  const checkedOptions = personnel.map(person => ({
    value: person,
    label: person.name,
  }));

  //* ========================= mock data =========================
  /* const mockData = {
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
  }; */

  const renderInstruction = () => {
    const renderCollection = () => {
      return routes.map(route => {
        const {
          from,
          to,
          depTime,
          arrTime,
          mileage,
          motorHours,
          work,
          odometer,
        } = route;
        return (
          <TBodyRow>
            <td>
              {from} - {to}
              {route.return ? ` - ${from}` : null}
            </td>
            <td>{depTime}</td>
            <td>{arrTime}</td>
            <td>{mileage.withCargo}</td>
            <td>{mileage.withoutCargo}</td>
            <td>{mileage.total}</td>
            <td>{mileage.withTrailer}</td>
            <td>{mileage.withTug}</td>
            <td>{motorHours.onStay}</td>
            <td>{motorHours.onMove}</td>
            <td>{motorHours.sum}</td>
            <td>{work.nameCargo}</td>
            <td>{work.weight}</td>
            <td>{odometer}</td>
          </TBodyRow>
        );
      });
    };
    let emptyRowArr = [];
    for (let i = 0; i < 14; i++) {
      emptyRowArr.push(<td></td>);
    }
    const renderEmpty = () => {
      return <TBodyRow>{emptyRowArr.map(item => item)}</TBodyRow>;
    };
    switch (routes.length) {
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

  const saveExcel = () => {
    /* dispatch(downloadMainList(mockData))
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
      }); */
  };

  const totalMil = routes.reduce((acc, item) => {
    return (acc += Number(item.mileage.total));
  }, 0);
  //* Fuel consumption is needed
  const formula =
    (selectedCar.fuelConsumption * totalMil) / 100 -
    ((selectedCar.fuelConsumption * totalMil) / 100) * 0.15;

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
                onChange={value => setValue('driverRank', value.value)}
                components={{ DropdownIndicator }}
                ariaLabel={'Водій'}
                placeholder="Водій"
                classNamePrefix="Select"
              />
              <input
                {...register('driverRank')}
                type={'text'}
                placeholder={'Військове звання'}
                readOnly={true}
              />
            </InputWrapper>
          </PersonnelDiv>
          <PersonnelDiv>
            <p>Правильність оформлення дорожнього листа перевірив:</p>
            <AuxWrapper>
              <InputWrapper>
                <StyledSelect
                  options={checkedOptions}
                  {...register('checkMan')}
                  onChange={({ value }) => {
                    console.log(value);
                    setValue('seniorRank', value.rank);
                    setValue('seniorPos', value.position);
                  }}
                  components={{ DropdownIndicator }}
                  ariaLabel={'Прізвище, ініціали'}
                  placeholder="Прізвище, ініціали"
                  classNamePrefix="Select"
                />
                <input
                  {...register('seniorPos')}
                  type={'text'}
                  placeholder={'Посада'}
                  readOnly={true}
                />
                <input
                  {...register('seniorRank')}
                  type={'text'}
                  placeholder={'Військове звання'}
                  readOnly={true}
                />
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
                        locale="uk"
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
      {isModalOpen && <CarInfoModal onClose={closeModal} />}
    </>
  );
};

export default CarWorkingInfo;
