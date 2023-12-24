import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css';

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
  CancelBtnStyle,
  ConfirmBtnStyle,
  BtnBox,
  DatePickerTwo,
  IconStyleClock,
  Legend,
  InputMultiDiv,
  InputLegendDiv,
  ToLongInput,
  CheckboxLabel,
  ErrorSpan,
  InputDiv,
} from './CarInfoModal.styled';
import { Icons } from '../Icons';
import { IconStyle, PickerContainer } from '../ModalFuel/ModalFuelStyle';
import moment from 'moment';

export default function CarInfoModal({
  showCloseIcon = true,
  onClose,
  modalSubmit,
}) {
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const closeClick = e => {
    if (e.target.name === 'cancel' || e.currentTarget.name === 'closeSvg') {
      onClose();
    }
  };

  const onSubmit = data => {
    const { arrivalDate, departureDate } = data;
    const arrDate = moment(arrivalDate).format('DD.MM.YY');
    const depDate = moment(departureDate).format('DD.MM.YY');
    const newData = Object.assign(data, {
      arrivalDate: arrDate,
      departureDate: depDate,
    });
    modalSubmit(prev => [...prev, newData]);
    onClose();
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
          <InformTitle>Заповніть дані</InformTitle>

          <InputContainerDiv>
            <InputRowDiv>
              <InputLegendDiv>
                <Legend>Маршрут руху</Legend>

                <InputMultiDiv>
                  <Controller
                    name="routeFrom"
                    control={control}
                    rules={{ required: "Обов'язкове поле" }}
                    render={({ field }) => (
                      <InputDiv>
                        <LongInput
                          type="text"
                          placeholder="Звідки"
                          {...field}
                          onChange={e => setValue('routeFrom', e.target.value)}
                        />
                        {errors.routeFrom && (
                          <ErrorSpan style={{ color: 'red' }}>
                            {errors.routeFrom.message}
                          </ErrorSpan>
                        )}
                      </InputDiv>
                    )}
                  />

                  <Controller
                    name="routeTo"
                    control={control}
                    rules={{ required: "Обов'язкове поле" }}
                    render={({ field }) => (
                      <InputDiv>
                        <LongInput
                          type="text"
                          placeholder="Куди"
                          {...field}
                          onChange={e => setValue('routeTo', e.target.value)}
                        />
                        {errors.routeTo && (
                          <ErrorSpan style={{ color: 'red' }}>
                            {errors.routeTo.message}
                          </ErrorSpan>
                        )}
                      </InputDiv>
                    )}
                  />
                </InputMultiDiv>
              </InputLegendDiv>
              <CheckboxLabel>
                <span>В один кінець</span>
                <Controller
                  name="oneway"
                  control={control}
                  render={({ field }) => (
                    <>
                      <input
                        type="checkbox"
                        defaultValue={false}
                        placeholder="В один кінець"
                        {...field}
                        onChange={e => setValue('oneway', e.target.checked)}
                      />
                      {/* {errors.oneway && (
                        <span style={{ color: 'red' }}>
                          {errors.oneway.message}
                        </span>
                      )} */}
                    </>
                  )}
                />
              </CheckboxLabel>
            </InputRowDiv>
            <InputRowDiv>
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
                      <PickerContainer>
                        <DatePickerTwo
                          selected={field.value}
                          onChange={date => setValue(`departureDate`, date)}
                          dateFormat="dd.MM.yyyy"
                          placeholderText="00.00.0000"
                          showIcon
                          icon={
                            <IconStyle size={16} height={18} name="calendar" />
                          }
                        />
                        {errors.departureDate && (
                          <span style={{ color: 'red' }}>
                            {errors.departureDate.message}
                          </span>
                        )}
                      </PickerContainer>
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
                        placeholder="00:00"
                        {...field}
                        onChange={e =>
                          setValue(`departureTime`, e.target.value)
                        }
                      />
                      <IconStyleClock size={18} height={18} name="clock" />
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
                <Span>Дата прибуття</Span>
                <Controller
                  name="arrivalDate"
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
                        <DatePickerTwo
                          selected={field.value}
                          onChange={date => setValue(`arrivalDate`, date)}
                          dateFormat="dd.MM.yyyy"
                          placeholderText="00.00.0000"
                          showIcon
                          icon={
                            <IconStyle size={16} height={18} name="calendar" />
                          }
                        />
                        {errors.departureDate && (
                          <span style={{ color: 'red' }}>
                            {errors.departureDate.message}
                          </span>
                        )}
                      </PickerContainer>
                    </>
                  )}
                />
              </Label>
              <Label>
                <Span>Час прибуття</Span>
                <Controller
                  name="arrivalTime"
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
                        placeholder="00:00"
                        {...field}
                        onChange={e => setValue(`arrivalTime`, e.target.value)}
                      />
                      <IconStyleClock size={18} height={18} name="clock" />
                      {errors.departureTime && (
                        <span style={{ color: 'red' }}>
                          {errors.departureTime.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </Label>
            </InputRowDiv>
            <InputLegendDiv>
              <Legend>Пройдено кілометрів</Legend>

              <InputMultiDiv>
                <Controller
                  name="withCargo"
                  control={control}
                  render={({ field }) => (
                    <InputDiv>
                      <ShortInputStyle
                        type="number"
                        placeholder="З вантажом"
                        {...field}
                        onChange={e => setValue('withCargo', e.target.value)}
                      />
                      {errors.withCargo && (
                        <ErrorSpan style={{ color: 'red' }}>
                          {errors.withCargo.message}
                        </ErrorSpan>
                      )}
                    </InputDiv>
                  )}
                />
                <Controller
                  name="withoutCargo"
                  control={control}
                  render={({ field }) => (
                    <InputDiv>
                      <ShortInputStyle
                        type="number"
                        placeholder="Без вантажу"
                        {...field}
                        onChange={e => setValue('withoutCargo', e.target.value)}
                      />
                      {errors.withoutCargo && (
                        <ErrorSpan style={{ color: 'red' }}>
                          {errors.withoutCargo.message}
                        </ErrorSpan>
                      )}
                    </InputDiv>
                  )}
                />
                <Controller
                  name="total"
                  control={control}
                  rules={{
                    required: "Обов'язкове поле",
                  }}
                  render={({ field }) => (
                    <InputDiv>
                      <ShortInputStyle
                        type="number"
                        placeholder="Усього"
                        {...field}
                        onChange={e => setValue('total', e.target.value)}
                      />
                      {errors.total && (
                        <ErrorSpan style={{ color: 'red' }}>
                          {errors.total.message}
                        </ErrorSpan>
                      )}
                    </InputDiv>
                  )}
                />
                <Controller
                  name="withTrailer"
                  control={control}
                  render={({ field }) => (
                    <InputDiv>
                      <ShortInputStyle
                        type="number"
                        placeholder="З причепом"
                        {...field}
                        onChange={e => setValue('withTrailer', e.target.value)}
                      />
                      {errors.withTrailer && (
                        <ErrorSpan style={{ color: 'red' }}>
                          {errors.withTrailer.message}
                        </ErrorSpan>
                      )}
                    </InputDiv>
                  )}
                />
                <Controller
                  name="withTug"
                  control={control}
                  render={({ field }) => (
                    <InputDiv>
                      <ShortInputStyle
                        type="number"
                        placeholder="На буксир"
                        {...field}
                        onChange={e => setValue('withTug', e.target.value)}
                      />
                      {errors.withTug && (
                        <ErrorSpan style={{ color: 'red' }}>
                          {errors.withTug.message}
                        </ErrorSpan>
                      )}
                    </InputDiv>
                  )}
                />
              </InputMultiDiv>
            </InputLegendDiv>
            <InputLegendDiv>
              <Legend>Відпрацьовано мотогодин</Legend>

              <InputMultiDiv>
                <Controller
                  name="onStay"
                  control={control}
                  render={({ field }) => (
                    <InputDiv>
                      <LongInput
                        type="number"
                        placeholder="На місці"
                        {...field}
                        onChange={e => setValue('onStay', e.target.value)}
                      />
                      {errors.onStay && (
                        <ErrorSpan style={{ color: 'red' }}>
                          {errors.onStay.message}
                        </ErrorSpan>
                      )}
                    </InputDiv>
                  )}
                />
                <Controller
                  name="onMove"
                  control={control}
                  render={({ field }) => (
                    <InputDiv>
                      <LongInput
                        type="number"
                        placeholder="Під час руху"
                        {...field}
                        onChange={e => setValue('onMove', e.target.value)}
                      />
                      {errors.onMove && (
                        <ErrorSpan style={{ color: 'red' }}>
                          {errors.onMove.message}
                        </ErrorSpan>
                      )}
                    </InputDiv>
                  )}
                />
                <Controller
                  name="sum"
                  control={control}
                  render={({ field }) => (
                    <InputDiv>
                      <LongInput
                        type="number"
                        placeholder="Усього"
                        {...field}
                        onChange={e => setValue('sum', e.target.value)}
                      />
                      {errors.sum && (
                        <ErrorSpan style={{ color: 'red' }}>
                          {errors.sum.message}
                        </ErrorSpan>
                      )}
                    </InputDiv>
                  )}
                />
              </InputMultiDiv>
            </InputLegendDiv>
            <InputRowDiv>
              <InputLegendDiv>
                <Legend>Виконана робота</Legend>

                <InputMultiDiv>
                  <Controller
                    name="nameCargo"
                    control={control}
                    render={({ field }) => (
                      <InputDiv>
                        <ShortInputStyle
                          type="text"
                          placeholder="Найм. вантажу"
                          {...field}
                          onChange={e => setValue('nameCargo', e.target.value)}
                        />
                        {errors.nameCargo && (
                          <ErrorSpan style={{ color: 'red' }}>
                            {errors.nameCargo.message}
                          </ErrorSpan>
                        )}
                      </InputDiv>
                    )}
                  />
                  <Controller
                    name="weight"
                    control={control}
                    render={({ field }) => (
                      <InputDiv>
                        <ShortInputStyle
                          type="number"
                          placeholder="Кількість"
                          {...field}
                          onChange={e => setValue('weight', e.target.value)}
                        />
                        {errors.weight && (
                          <ErrorSpan style={{ color: 'red' }}>
                            {errors.weight.message}
                          </ErrorSpan>
                        )}
                      </InputDiv>
                    )}
                  />
                </InputMultiDiv>
              </InputLegendDiv>

              <Label>
                <Span>Показання спідометра</Span>

                <Controller
                  name="odometer"
                  control={control}
                  rules={{
                    required: "Обов'язкове поле",
                  }}
                  render={({ field }) => (
                    <InputDiv>
                      <ToLongInput
                        type="number"
                        placeholder="Показання спідометра"
                        {...field}
                        onChange={e => setValue('odometer', e.target.value)}
                      />
                      {errors.odometer && (
                        <ErrorSpan style={{ color: 'red' }}>
                          {errors.odometer.message}
                        </ErrorSpan>
                      )}
                    </InputDiv>
                  )}
                />
              </Label>
            </InputRowDiv>
          </InputContainerDiv>
          <BtnBox>
            <ConfirmBtnStyle type="submit" name="confirm">
              Додати
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
