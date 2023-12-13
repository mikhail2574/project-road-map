import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import {
  ModalWindowStyle,
  OverlayStyle,
  ButtonCloseStyle,
  InformTitle,
  InputContainerDiv,
  ShortInputStyle,
  MidInputStyle,
  LongInput,
  InputRowDiv,
  Label,
  Span,
  TimeDiv,
  InputTimeDiv,
  ToLongInput,
  OdometerTitle,
  BtnPlus,
  OdomPlusContainer,
  CancelBtnStyle,
  ConfirmBtnStyle,
  BtnBox,
  BtnTrash,
} from '../ModalMainField/ModalMainFieldStyle';
import { Icon } from '../Icon';
import { Icons } from '../Icons';

export default function Modal({ showCloseIcon = true, close }) {
  const [duplicateInputs, setDuplicateInputs] = useState(1);
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  const handleBtnPlusClick = () => {
    setDuplicateInputs(prevCount => prevCount + 1);
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        close();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [close]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      close();
    }
  };

  const closeClick = e => {
    if (e.target.name === 'cancel' || e.currentTarget.name === 'closeSvg') {
      close();
    }
  };

  const onSubmit = data => {
    console.log(data); // Обработка данных формы
  };

  return (
    <OverlayStyle onClick={e => handleBackdropClick(e)}>
      <Icons />
      <ModalWindowStyle>
        {showCloseIcon && (
          <ButtonCloseStyle type="button" name="closeSvg" onClick={closeClick}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L17 17" stroke="#FBFBFB" />
              <path d="M1 17L17 0.999999" stroke="#FBFBFB" />
            </svg>
          </ButtonCloseStyle>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <InformTitle>Загальна інформація</InformTitle>

          <InputContainerDiv>
            <InputRowDiv>
              <Label>
                <Span>Дата документа</Span>
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
                      <ShortInputStyle
                        type="text"
                        placeholder="00.00.0000"
                        {...field}
                        onChange={e => setValue('documentDate', e.target.value)}
                      />
                      {errors.documentDate && (
                        <span style={{ color: 'red' }}>
                          {errors.documentDate.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </Label>

              <Label>
                <Span>Номер документа</Span>
                <Controller
                  name="numberDocument"
                  control={control}
                  rules={{ required: "Обов'язкове поле" }}
                  render={({ field }) => (
                    <>
                      <ShortInputStyle
                        type="text"
                        placeholder="0"
                        {...field}
                        onChange={e =>
                          setValue('numberDocument', e.target.value)
                        }
                      />
                      {errors.numberDocument && (
                        <span style={{ color: 'red' }}>
                          {errors.numberDocument.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </Label>

              <Label>
                <Span>Військова частина</Span>
                <Controller
                  name="militaryBase"
                  control={control}
                  rules={{ required: "Обов'язкове поле" }}
                  render={({ field }) => (
                    <>
                      <MidInputStyle
                        type="text"
                        placeholder="0"
                        {...field}
                        onChange={e => setValue('militaryBase', e.target.value)}
                      />
                      {errors.militaryBase && (
                        <span style={{ color: 'red' }}>
                          {errors.militaryBase.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </Label>

              <Label>
                <Span>Водій</Span>
                <Controller
                  name="driver"
                  control={control}
                  rules={{
                    required: "Обов'язкове поле",
                    pattern: {
                      value: /^[А-ЯІ][а-яі]+\s[А-ЯІ]\.[А-ЯІ]\.$/,
                      message:
                        'Невірний формат (приклад правильного формату : Бандера С.А.)',
                    },
                  }}
                  render={({ field }) => (
                    <>
                      <MidInputStyle
                        type="text"
                        placeholder="ПІБ, військове звання"
                        {...field}
                        onChange={e => setValue('driver', e.target.value)}
                      />
                      {errors.driver && (
                        <span style={{ color: 'red' }}>
                          {errors.driver.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </Label>
            </InputRowDiv>
            <InputRowDiv>
              <Label>
                <Span>Старший машини</Span>
                <Controller
                  name="seniorCar"
                  control={control}
                  rules={{
                    required: "Обов'язкове поле",
                    pattern: {
                      value: /^[А-ЯІ][а-яі]+\s[А-ЯІ]\.[А-ЯІ]\.$/,
                      message:
                        'Невірний формат (приклад правильного формату : Бандера С.А.)',
                    },
                  }}
                  render={({ field }) => (
                    <>
                      <LongInput
                        type="text"
                        placeholder="ПІБ, військове звання"
                        {...field}
                        onChange={e => setValue('seniorCar', e.target.value)}
                      />
                      {errors.seniorCar && (
                        <span style={{ color: 'red' }}>
                          {errors.seniorCar.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </Label>
              <Label>
                <Span>Маршрут руху</Span>
                <Controller
                  name="trafficRoute"
                  control={control}
                  rules={{ required: "Обов'язкове поле" }}
                  render={({ field }) => (
                    <>
                      <LongInput
                        type="text"
                        placeholder="Введіть текст"
                        {...field}
                        onChange={e => setValue('trafficRoute', e.target.value)}
                      />
                      {errors.trafficRoute && (
                        <span style={{ color: 'red' }}>
                          {errors.trafficRoute.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </Label>
              <Label>
                <Span>Начальник автомобільної служби</Span>
                <Controller
                  name="headAutoservice"
                  control={control}
                  rules={{
                    required: "Обов'язкове поле",
                    pattern: {
                      value: /^[А-ЯІ][а-яі]+\s[А-ЯІ]\.[А-ЯІ]\.$/,
                      message:
                        'Невірний формат (приклад правильного формату : Бандера С.А.)',
                    },
                  }}
                  render={({ field }) => (
                    <>
                      <LongInput
                        type="text"
                        placeholder="ПІБ, військове звання"
                        {...field}
                        onChange={e =>
                          setValue('headAutoservice', e.target.value)
                        }
                      />
                      {errors.headAutoservice && (
                        <span style={{ color: 'red' }}>
                          {errors.headAutoservice.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </Label>
            </InputRowDiv>
            <InputRowDiv>
              <Label>
                <Span>Старший (технік) підрозділу</Span>
                <Controller
                  name="seniorTechUnit"
                  control={control}
                  rules={{
                    required: "Обов'язкове поле",
                    pattern: {
                      value: /^[А-ЯІ][а-яі]+\s[А-ЯІ]\.[А-ЯІ]\.$/,
                      message:
                        'Невірний формат (приклад правильного формату : Бандера С.А.)',
                    },
                  }}
                  render={({ field }) => (
                    <>
                      <LongInput
                        type="text"
                        placeholder="ПІБ, військове звання"
                        {...field}
                        onChange={e =>
                          setValue('seniorTechUnit', e.target.value)
                        }
                      />
                      {errors.seniorTechUnit && (
                        <span style={{ color: 'red' }}>
                          {errors.seniorTechUnit.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </Label>
              <Label>
                <Span>Начальник КТП</Span>
                <Controller
                  name="seniorKtp"
                  control={control}
                  rules={{
                    required: "Обов'язкове поле",
                    pattern: {
                      value: /^[А-ЯІ][а-яі]+\s[А-ЯІ]\.[А-ЯІ]\.$/,
                      message:
                        'Невірний формат (приклад правильного формату : Бандера С.А.)',
                    },
                  }}
                  render={({ field }) => (
                    <>
                      <LongInput
                        type="text"
                        placeholder="ПІБ, військове звання"
                        {...field}
                        onChange={e => setValue('seniorKtp', e.target.value)}
                      />
                      {errors.seniorKtp && (
                        <span style={{ color: 'red' }}>
                          {errors.seniorKtp.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </Label>
              <Label>
                <Span>Підстава (мета) виписки</Span>
                <Controller
                  name="purposeStatement"
                  control={control}
                  rules={{ required: "Обов'язкове поле" }}
                  render={({ field }) => (
                    <>
                      <LongInput
                        type="text"
                        placeholder="0"
                        {...field}
                        onChange={e =>
                          setValue('purposeStatement', e.target.value)
                        }
                      />
                      {errors.purposeStatement && (
                        <span style={{ color: 'red' }}>
                          {errors.purposeStatement.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </Label>
            </InputRowDiv>
            <InputRowDiv>
              <Label>
                <Span>Марка автомобіля</Span>
                <Controller
                  name="carName"
                  control={control}
                  rules={{
                    required: "Обов'язкове поле",
                    pattern: {
                      value: /^[a-zA-Zа-яА-Я0-9]*$/,
                      message: 'Може містити літери та цифри',
                    },
                  }}
                  render={({ field }) => (
                    <>
                      <LongInput
                        type="text"
                        placeholder="Введіть текст"
                        {...field}
                        onChange={e => setValue('carName', e.target.value)}
                      />
                      {errors.carName && (
                        <span style={{ color: 'red' }}>
                          {errors.carName.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </Label>
              <Label>
                <Span>Номерний знак</Span>
                <Controller
                  name="sign"
                  control={control}
                  rules={{
                    required: "Обов'язкове поле",
                    pattern: {
                      value: /^[a-zA-Zа-яА-Я0-9]{2}\d{4}[a-zA-Zа-яА-Я0-9]{2}$/,
                      message:
                        'Невірний формат (приклад правильного формату: АА1234ББ)',
                    },
                    validate: value => {
                      const forbiddenLetters = ['І', 'О', 'Є', 'Ї', 'Й'];
                      const forbiddenLetterFound = forbiddenLetters.some(
                        letter => value.includes(letter)
                      );
                      return (
                        !forbiddenLetterFound ||
                        'Заборонені літери: І, О, Є, Ї, Й'
                      );
                    },
                  }}
                  render={({ field }) => (
                    <>
                      <LongInput
                        type="text"
                        placeholder="Введіть текст"
                        {...field}
                        onChange={e => setValue('sign', e.target.value)}
                      />
                      {errors.sign && (
                        <span style={{ color: 'red' }}>
                          {errors.sign.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </Label>
              <Label>
                <Span>Група експлуатації</Span>
                <Controller
                  name="exploitationGroup"
                  control={control}
                  rules={{ required: "Обов'язкове поле" }}
                  render={({ field }) => (
                    <LongInput
                      type="text"
                      placeholder="Введіть текст"
                      {...field}
                      onChange={e =>
                        setValue('exploitationGroup', e.target.value)
                      }
                    />
                  )}
                />
                {errors.exploitationGroup && (
                  <span style={{ color: 'red' }}>
                    {errors.exploitationGroup.message}
                  </span>
                )}
              </Label>
            </InputRowDiv>
          </InputContainerDiv>
          <OdomPlusContainer>
            <OdometerTitle>Показники спідометра</OdometerTitle>
            <BtnPlus onClick={handleBtnPlusClick}>
              <Icon size={25} name="plus" />
            </BtnPlus>
          </OdomPlusContainer>

          <TimeDiv>
            {[...Array(duplicateInputs)].map((_, index) => (
              <InputTimeDiv key={index}>
                <Label>
                  <Span>Дата вибуття</Span>
                  <Controller
                    name="departureDate"
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
                        <MidInputStyle
                          type="text"
                          placeholder="00.00.0000"
                          {...field}
                          onChange={e =>
                            setValue('departureDate', e.target.value)
                          }
                        />
                        {errors.departureDate && (
                          <span style={{ color: 'red' }}>
                            {errors.departureDate.message}
                          </span>
                        )}
                      </>
                    )}
                  />
                </Label>
                <Label>
                  <Span>Час вибуття</Span>
                  <Controller
                    name="departureTime"
                    control={control}
                    rules={{
                      required: "Обов'язкове поле",
                      pattern: {
                        value: /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
                        message:
                          'Невірний формат (приклад правильного формату: 14:30)',
                      },
                    }}
                    render={({ field }) => (
                      <>
                        <MidInputStyle
                          type="text"
                          placeholder="00.00.0000"
                          {...field}
                          onChange={e =>
                            setValue('departureTime', e.target.value)
                          }
                        />
                        {errors.departureTime && (
                          <span style={{ color: 'red' }}>
                            {errors.departureTime.message}
                          </span>
                        )}
                      </>
                    )}
                  />
                </Label>
                <Label>
                  <Span>Показники спідометра по вибуттю</Span>
                  <Controller
                    name="speedOmeter"
                    control={control}
                    rules={{
                      required: "Обов'язкове поле",
                      pattern: {
                        value: /^\d+$/,
                        message: 'Можна вводити тільки числа',
                      },
                    }}
                    render={({ field }) => (
                      <>
                        <ToLongInput
                          type="text"
                          placeholder="Введіть текст"
                          {...field}
                          onChange={e =>
                            setValue('speedOmeter', e.target.value)
                          }
                        />
                        {errors.speedOmeter && (
                          <span style={{ color: 'red' }}>
                            {errors.speedOmeter.message}
                          </span>
                        )}
                      </>
                    )}
                  />
                </Label>

                <Label>
                  <Span>&nbsp;</Span>
                  <BtnTrash
                    type="button
          "
                  >
                    {' '}
                    <Icon size={16} name="trash" />
                  </BtnTrash>
                </Label>
              </InputTimeDiv>
            ))}
          </TimeDiv>
          <BtnBox>
            <ConfirmBtnStyle
              type="button
          "
              name="confirm"
              onClick={closeClick}
            >
              Так, видалити
            </ConfirmBtnStyle>
            <CancelBtnStyle type="button" name="cancel" onClick={closeClick}>
              Відмінити
            </CancelBtnStyle>
          </BtnBox>
        </form>
      </ModalWindowStyle>
    </OverlayStyle>
  );
}
