import { Icon } from '../Icon';
import React, { useEffect, useState } from 'react';
import {
  StyledButtonWrapper,
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
  StyledWhiteWrapper,
} from '../Directory/Directory.styled';
import {
  selectError,
  selectIsLoading,
  selectPersonnel,
} from 'redux/infos/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deletePersonnelThunk, fetchInfosThunk } from 'redux/infos/operations';
import { StyledEmptyTableTh } from '../AddPersonnelForm/AddPersonnelForm.styled';
import EditPersonnelForm from '../EditPersonnelForm/EditPersonnelForm';

const Personnel = () => {
  const personnel = useSelector(selectPersonnel);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const [selectedDriverId, setSelectedDriverId] = useState(null);
  const [isDeleteDriverModalVisible, setDeleteDriverModalVisible] =
    useState(false);
  const [isEditDriverModalVisible, setEditDriverModalVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    dispatch(fetchInfosThunk());
  }, [dispatch]);

  const openModal = () => {
    setModalVisible(true);
  };

  const openDeleteDriverModal = idx => {
    setSelectedDriverId(idx);
    setDeleteDriverModalVisible(true);
  };

  const closeDeleteDriverModal = () => {
    setDeleteDriverModalVisible(false);
  };

  const openEditDriverModal = idx => {
    setSelectedDriverId(idx);
    setEditDriverModalVisible(true);
  };

  const closeEditDriverModal = () => {
    setEditDriverModalVisible(false);
  };

  const handleDeleteDriver = idx => {
    dispatch(deletePersonnelThunk(idx));
  };

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {error && <p>Щось пішло не так</p>}
      <StyledWhiteWrapper>
        <StyledTableScrollWrapper>
          <StyledTableWrapper>
            <StyledTableHead>
              <StyledTableHeaderTr>
                <StyledTableHeaderTh>Посада</StyledTableHeaderTh>
                <StyledTableHeaderTh>Звання</StyledTableHeaderTh>
                <StyledTableHeaderTh>Звання скороченно</StyledTableHeaderTh>
                <StyledTableHeaderTh>ПІБ</StyledTableHeaderTh>
                <StyledEmptyTableTh></StyledEmptyTableTh>
              </StyledTableHeaderTr>
            </StyledTableHead>
            <StyledTableBody>
              {personnel?.map((person, idx) => (
                <StyledTableBodyTr key={idx}>
                  <StyledTableBodyTd>{person.position}</StyledTableBodyTd>
                  <StyledTableBodyTd>{person.rank}</StyledTableBodyTd>
                  <StyledTableShortTd>{person.rankShort}</StyledTableShortTd>
                  <StyledTableBodyTd>{person.name}</StyledTableBodyTd>
                  <StyledTableBodyTd>
                    <StyledButtonWrapper>
                      <StyledTableEditButton
                        onClick={() => openEditDriverModal(idx)}
                      >
                        <Icon name="edit" size={16} />
                      </StyledTableEditButton>
                      <StyledTableDeleteButton
                        onClick={() => openDeleteDriverModal(idx)}
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
      {isEditDriverModalVisible && (
        <EditPersonnelForm
          close={closeEditDriverModal}
          showCloseIcon={true}
          id={selectedDriverId}
        />
      )}
    </>
  );
};

export default Personnel;
