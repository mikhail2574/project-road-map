import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCarsThunk, fetchInfosThunk } from 'redux/infos/operations';
import {
  selectCars,
  selectError,
  selectIsLoading,
} from 'redux/infos/selectors';
import {
  InnactiveButton,
  StyledActiveButton,
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
import { Line, StyledNav } from '../CarWorkingInfo/CarWorkingInfo.styled';
import Personnel from '../Personnel/Personnel';
import AddPersonnelForm from '../AddPersonnelForm/AddPersonnelForm';

const Directory = () => {
  const cars = useSelector(selectCars);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const [selectedCarSign, setSelectedCarSign] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [isPersonnelModalVisible, setPersonnelModalVisible] = useState(false);

  const [selectedTable, setSelectedTable] = useState('cars');

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

  // useEffect(() => {
  //   dispatch(fetchInfosThunk());
  // }, [dispatch]);

  const handleDeleteCar = sign => {
    dispatch(deleteCarsThunk(sign));
  };

  const openEditModal = sign => {
    setSelectedCarSign(sign);
    setEditModalVisible(true);
  };

  const closeEditModal = () => {
    setEditModalVisible(false);
  };

  const handleTableChange = table => {
    setSelectedTable(table);
  };

  const openPersonnelModal = () => {
    setPersonnelModalVisible(true);
  };

  const closePersonnelModal = () => {
    setPersonnelModalVisible(false);
  };

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {error && <p>Щось пішло не так</p>}
      <StyledHeaderWrapper>
        <StyledTitleDirectory>Довідник</StyledTitleDirectory>
        {selectedTable === 'cars' ? (
          <StyledAddButton onClick={openModal}>Додати дані</StyledAddButton>
        ) : (
          <StyledAddButton onClick={openPersonnelModal}>
            Додати людину
          </StyledAddButton>
        )}
      </StyledHeaderWrapper>
      <StyledNav>
        {selectedTable === 'cars' ? (
          <StyledActiveButton onClick={() => handleTableChange('cars')}>
            Автомобілі
          </StyledActiveButton>
        ) : (
          <InnactiveButton onClick={() => handleTableChange('cars')}>
            Автомобілі
          </InnactiveButton>
        )}
        {selectedTable === 'drivers' ? (
          <StyledActiveButton onClick={() => handleTableChange('drivers')}>
            Люди
          </StyledActiveButton>
        ) : (
          <InnactiveButton onClick={() => handleTableChange('drivers')}>
            Люди
          </InnactiveButton>
        )}
      </StyledNav>
      <Line />
      {selectedTable === 'cars' ? (
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
                  <StyledTableHeaderTh>
                    Група експлуатації 2
                  </StyledTableHeaderTh>
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
                    <StyledTableBodyTd>
                      {car.exploitationGroup}
                    </StyledTableBodyTd>
                    <StyledTableShortTd>{car.driver}</StyledTableShortTd>
                    <StyledTableShortTd>{car.driverRank}</StyledTableShortTd>
                    <StyledTableShortTd>{car.unit}</StyledTableShortTd>
                    <StyledTableShortTd>{car.senior}</StyledTableShortTd>
                    <StyledTableShortTd>{car.seniorRank}</StyledTableShortTd>
                    <StyledTableBodyTd>
                      <StyledButtonWrapper>
                        <StyledTableEditButton
                          onClick={() => openEditModal(car.sign)}
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
        </StyledWhiteWrapper>
      ) : (
        <Personnel />
      )}
      {isPersonnelModalVisible && (
        <AddPersonnelForm close={closePersonnelModal} />
      )}

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
      {selectedCarSign && isEditModalVisible && (
        <ModalEditing
          showCloseIcon={true}
          close={closeEditModal}
          id={selectedCarSign}
        />
      )}
    </>
  );
};

export default Directory;
