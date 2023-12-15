import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteCarsThunk,
  fetchInfosThunk,
  updateCarsThunk,
} from 'redux/infos/operations';
import {
  selectCars,
  selectError,
  selectIsLoading,
} from 'redux/infos/selectors';
import {
  StyledAddButton,
  StyledButtonWrapper,
  StyledHeaderWrapper,
  StyledTableBody,
  StyledTableBodyTd,
  StyledTableBodyTr,
  StyledTableDeleteButton,
  StyledTableEditButton,
  StyledTableHead,
  StyledTableHeaderTh,
  StyledTableHeaderTr,
  StyledTableScrollWrapper,
  StyledTableShortTd,
  StyledTableWrapper,
  StyledTitleDirectory,
  StyledWhiteWrapper,
} from './Directory.styled';
import { Icon } from '../Icon';
import Modal from '../modal/modal';
import ModalDelete from '../ModalDelete/ModalDelete';
import { DeleteCar } from '../DeleteCar/DeleteCar';
import ModalEditing from '../ModalEditing/ModalEditing';
import { set } from 'backend/app';

const Directory = () => {
  const cars = useSelector(selectCars);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const [selectedCarSign, setSelectedCarSign] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [isEditModalVisible, setEditModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const openDeleteModal = sign => {
    setSelectedCarSign(sign);
    setDeleteModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const closeDeleteModal = () => {
    setDeleteModalVisible(false);
  };

  useEffect(() => {
    dispatch(fetchInfosThunk());
  }, [dispatch]);

  const handleDeleteCar = sign => {
    dispatch(deleteCarsThunk(sign));
  };

  const handleEditCar = sign => {
    setSelectedCarSign(sign);
  };

  const openEditModal = sign => {
    setSelectedCarSign(sign);
    setEditModalVisible(true);
  };

  const closeEditModal = () => {
    setEditModalVisible(false);
  };

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {error && <p>Щось пішло не так</p>}
      <StyledHeaderWrapper>
        <StyledTitleDirectory>Довідник</StyledTitleDirectory>
        <StyledAddButton onClick={openModal}>Додадти дані</StyledAddButton>
      </StyledHeaderWrapper>
      <StyledWhiteWrapper>
        <StyledTableScrollWrapper>
          <StyledTableWrapper>
            <StyledTableHead>
              <StyledTableHeaderTr>
                <StyledTableHeaderTh>Назва автомобіля</StyledTableHeaderTh>
                <StyledTableHeaderTh>Номерний знак</StyledTableHeaderTh>
                <StyledTableHeaderTh>Тип палива</StyledTableHeaderTh>
                <StyledTableHeaderTh>
                  Розхід палива на 100 км
                </StyledTableHeaderTh>
                <StyledTableHeaderTh>Тип мастила</StyledTableHeaderTh>
                <StyledTableHeaderTh>Розхід оливи</StyledTableHeaderTh>
                <StyledTableHeaderTh>Група експлуатації</StyledTableHeaderTh>
                <StyledTableHeaderTh>Група експлуатації 2</StyledTableHeaderTh>
                <StyledTableHeaderTh>Водій</StyledTableHeaderTh>
                <StyledTableHeaderTh>Звання водія</StyledTableHeaderTh>
                <StyledTableHeaderTh>Підозріл</StyledTableHeaderTh>
                <StyledTableHeaderTh>Старший</StyledTableHeaderTh>
                <StyledTableHeaderTh>Звання старшого</StyledTableHeaderTh>
                <StyledTableHeaderTh></StyledTableHeaderTh>
              </StyledTableHeaderTr>
            </StyledTableHead>
            <StyledTableBody>
              {cars?.map(car => (
                <StyledTableBodyTr key={car.sign}>
                  <StyledTableBodyTd>{car.carName}</StyledTableBodyTd>
                  <StyledTableBodyTd>{car.sign}</StyledTableBodyTd>
                  <StyledTableShortTd>{car.fuelType}</StyledTableShortTd>
                  <StyledTableBodyTd>{car.fuelConsumption}</StyledTableBodyTd>
                  <StyledTableShortTd>{car.oilType}</StyledTableShortTd>
                  <StyledTableBodyTd>{car.oilConsumption}</StyledTableBodyTd>
                  <StyledTableBodyTd>
                    {car.exploitationGroupShort}
                  </StyledTableBodyTd>
                  <StyledTableBodyTd>{car.exploitationGroup}</StyledTableBodyTd>
                  <StyledTableShortTd>{car.driver}</StyledTableShortTd>
                  <StyledTableShortTd>{car.driverRank}</StyledTableShortTd>
                  <StyledTableShortTd>{car.unit}</StyledTableShortTd>
                  <StyledTableShortTd>{car.senior}</StyledTableShortTd>
                  <StyledTableShortTd>{car.seniorRank}</StyledTableShortTd>
                  <StyledTableBodyTd>
                    <StyledButtonWrapper>
                      <StyledTableEditButton
                        onClick={() => handleEditCar(car.sign)}
                      >
                        <Icon name="edit" size={16} />
                      </StyledTableEditButton>
                      <StyledTableDeleteButton
                        onClick={() => openDeleteModal(car.sign)}
                      >
                        <Icon name="trash" size={16} />
                      </StyledTableDeleteButton>
                    </StyledButtonWrapper>
                  </StyledTableBodyTd>
                </StyledTableBodyTr>
              ))}
            </StyledTableBody>
          </StyledTableWrapper>
        </StyledTableScrollWrapper>
        {isModalVisible && (
          <Modal showCloseIcon={true} close={closeModal}></Modal>
        )}
        {isDeleteModalVisible && (
          <ModalDelete showCloseIcon={true} close={closeDeleteModal}>
            <DeleteCar
              deleteCar={() => handleDeleteCar(selectedCarSign)}
              carSign={selectedCarSign}
              close={closeDeleteModal}
            />
          </ModalDelete>
        )}
        {selectedCarSign && (
          <ModalEditing
            showCloseIcon={true}
            close={closeDeleteModal}
            car={selectedCarSign}
          />
        )}
      </StyledWhiteWrapper>
    </>
  );
};

export default Directory;
