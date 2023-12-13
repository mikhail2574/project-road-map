import { useEffect } from 'react';

import {
  ModalWindowStyle,
  OverlayStyle,
  ButtonCloseStyle,
  CancelBtnStyle,
  ConfirmBtnStyle,
  BtnBox,
  RequestDel,
} from '../ModalDelete/ModalDeleteStyle';

export default function Modal({ children, showCloseIcon = true, close }) {
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

  return (
    <OverlayStyle onClick={e => handleBackdropClick(e)}>
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
        {children}
        <RequestDel>
          Впевнені, що <br /> бажаєте видалити <br />
          цю стрічку ?{' '}
        </RequestDel>
        <BtnBox>
          <ConfirmBtnStyle type="button" name="confirm" onClick={closeClick}>
            Так, видалити
          </ConfirmBtnStyle>
          <CancelBtnStyle type="button" name="cancel" onClick={closeClick}>
            Відмінити
          </CancelBtnStyle>
        </BtnBox>
      </ModalWindowStyle>
    </OverlayStyle>
  );
}
