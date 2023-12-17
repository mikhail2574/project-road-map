import React, { useEffect } from 'react';
import {
  AddBtnStyle,
  BtnActive,
  ButtonCloseStyle,
  CancelBtnStyle,
  ModalTitle,
  OverlayStyle,
} from '../modal/Modal.styled';
import { useDispatch, useSelector } from 'react-redux';
import { updatePersonnelThunk } from 'redux/infos/operations';
import { Controller, useForm } from 'react-hook-form';
import { selectPersonnel } from 'redux/infos/selectors';
import {
  StyledErrorSpanName,
  StyledErrorSpanPosition,
  StyledErrorSpanRank,
  StyledModalInput,
  StyledModalInputPosition,
  StyledModalInputWrapper,
  StyledModalWindowWrapper,
} from '../AddPersonnelForm/AddPersonnelForm.styled';

const EditPersonnelForm = ({ showCloseIcon = true, close, id }) => {
  const personnel = useSelector(selectPersonnel).find(
    (person, idx) => idx === id
  );
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      rank: personnel.rank,
      name: personnel.name,
      position: personnel.position,
    },
  });
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(updatePersonnelThunk(data));
    close();
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
    if (e.currentTarget.name === 'closeSvg') {
      close();
    }
  };

  const handleReset = () => {
    setValue('rank', '');
    setValue('name', '');
    setValue('position', '');
  };
  return (
    <OverlayStyle onClick={e => handleBackdropClick(e)}>
      <StyledModalWindowWrapper>
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
          <ModalTitle>Заповніть дані</ModalTitle>
          <StyledModalInputWrapper>
            <Controller
              name="rank"
              control={control}
              rules={{
                required: "Обов'язкове поле",
                pattern: {
                  value: /^[a-zA-Zа-яА-Я0-9 ]+$/,
                  message: 'Може містити літери та цифри',
                },
              }}
              render={({ field }) => (
                <>
                  <StyledModalInput
                    type="text"
                    placeholder="Військове звання"
                    {...field}
                    onChange={e => setValue('rank', e.target.value)}
                  />
                  {errors.rank && (
                    <StyledErrorSpanRank>
                      {errors.rank.message}
                    </StyledErrorSpanRank>
                  )}
                </>
              )}
            />
            <Controller
              name="name"
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
                  <StyledModalInput
                    type="text"
                    placeholder="Прізвище, ініціали"
                    {...field}
                    onChange={e => setValue('name', e.target.value)}
                  />
                  {errors.name && (
                    <StyledErrorSpanName>
                      {errors.name.message}
                    </StyledErrorSpanName>
                  )}
                </>
              )}
            />
          </StyledModalInputWrapper>
          <Controller
            name="position"
            control={control}
            rules={{
              required: "Обов'язкове поле",
              pattern: {
                value: /^[a-zA-Zа-яА-Я0-9 ]*$/,
                message: 'Може містити літери та цифри',
              },
            }}
            render={({ field }) => (
              <>
                <StyledModalInputPosition
                  type="text"
                  placeholder="Посада"
                  {...field}
                  onChange={e => setValue('position', e.target.value)}
                />
                {errors.position && (
                  <StyledErrorSpanPosition>
                    {errors.position.message}
                  </StyledErrorSpanPosition>
                )}
              </>
            )}
          />
          <BtnActive>
            <AddBtnStyle type="submit" name="add">
              Додати
            </AddBtnStyle>
            <CancelBtnStyle type="button" onClick={handleReset}>
              Видалити
            </CancelBtnStyle>
          </BtnActive>
        </form>
      </StyledModalWindowWrapper>
    </OverlayStyle>
  );
};

export default EditPersonnelForm;
