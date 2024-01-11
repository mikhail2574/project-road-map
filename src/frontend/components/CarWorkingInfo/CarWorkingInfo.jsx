import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { selectPersonnel } from 'redux/infos/selectors';
import { components } from 'react-select';
import { VscChevronDown } from 'react-icons/vsc';
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
import CarInfoModal from '../CarInfoModal/CarInfoModal';
import { DatePickerOne } from '../CarInfoModal/CarInfoModal.styled';
import { PickerContainer } from '../ModalFuel/ModalFuelStyle';
import downloadMainList from 'redux/download/operations';
import { selectCar, selectForm, selectRoutes } from 'redux/form/selectors';
import { setCarWork, setPersonnel } from 'redux/form/slice';

const CarWorkingInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [driverSelect, setDriverOption] = useState(null);
  const [driver, setDriver] = useState({
    name: '',
    rank: '',
    position: '',
  });
  const [checked, setChecked] = useState({
    name: '',
    rank: '',
    position: '',
  });

  const dispatch = useDispatch();

  const routes = useSelector(selectRoutes);
  const personnel = useSelector(selectPersonnel);
  const selectedCar = useSelector(selectCar);
  const formToSend = useSelector(selectForm);

  const totalMil = routes.reduce((acc, item) => {
    return (acc += Number(item?.mileage.total));
  }, 0);
  const formula =
    (selectedCar.fuelConsumption * totalMil) / 100 -
    ((selectedCar.fuelConsumption * totalMil) / 100) * 0.15;

  const {
    handleSubmit,
    control,
    setValue,
    register,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (
      selectedCar.driver.name ||
      selectedCar.driver.rank ||
      selectedCar.driver.position
    ) {
      const driverOption = {
        value: selectedCar.driver?.rank,
        label: selectedCar.driver?.name,
      };
      setDriverOption(driverOption);
    }
  }, [selectedCar]);

  useEffect(() => {
    if (routes.length !== 0) {
      dispatch(
        setCarWork({
          totalMileage: totalMil,
          totalExpense: formula,
        })
      );
    }
  }, [dispatch, routes, totalMil, formula]);

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
  console.log('driverOptions :>> ', driverOptions);
  const checkedOptions = personnel.map(person => ({
    value: person,
    label: person.name,
  }));

  const renderInstruction = () => {
    const renderCollection = () => {
      return routes.map((route, idx) => {
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
          <TBodyRow key={idx}>
            <td>
              {from} - {to}
              {route.return ? null : ` - ${from}`}
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
      emptyRowArr.push(<td key={i}></td>);
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

  const onSubmit = data => {};

  const addGenInfo = () => {}; // ????

  const saveExcel = () => {
    dispatch(downloadMainList(formToSend))
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

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <BtnSection>
        <SectionHead>
          <StyledTitle>Дорожній лист</StyledTitle>
          <BtnBox>
            <InfoBtn onClick={addGenInfo}>Додати загальну інформацію</InfoBtn>
            <InfoBtn onClick={openModal}>Редагувати</InfoBtn>
            <SaveBtn onClick={saveExcel}>Зберегти в Excel</SaveBtn>
            {/* <SaveBtn onClick={printPDF}>Друк сторінки</SaveBtn> */}
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
                  З вантажем
                </th>
                <th scope="col" rowSpan={2}>
                  Без вантажу
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
                  Кількість, т
                </th>
              </SubRow>
              <SubSubRow>
                <th scope="col">З приче пом</th>
                <th scope="col">На буксирі</th>
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
            Всього витрачено:{' '}
            <span>{(formula > 0 && formula.toFixed(2)) || 0}</span>
          </p>
        </CalcDiv>
        <form onSubmit={handleSubmit(onSubmit)}>
          <PersonnelDiv>
            <p>Водій (механік - водій):</p>
            <InputWrapper>
              <StyledSelect
                options={driverOptions}
                {...register('driver')}
                value={driverSelect}
                onChange={value => {
                  setValue('driverRank', value.value);
                  setDriverOption(value);
                  const driverFull = personnel.find(
                    person => value.label === person.name
                  );
                  setDriver(driverFull);
                  dispatch(
                    setPersonnel({ driver: driverFull, checkPerson: checked })
                  );
                }}
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
                    setValue('seniorRank', value.rank);
                    setValue('seniorPos', value.position);
                    setChecked(value);
                    dispatch(
                      setPersonnel({
                        driver,
                        checkPerson: value,
                      })
                    );
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
                        // icon={
                        //   <IconStyleCalendar
                        //     size={16}
                        //     height={18}
                        //     name="dark-calendar"
                        //   />
                        // }
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
