import React from 'react';
import { Button, Modal } from '@mantine/core';
import { AddAssetModalLayout } from '../AssetsModals/AddAssetModalLayout';

export const Dashboard = () => {
  const [opened, setOpened] = React.useState(false);
  
  const openModal = () => setOpened(true);
  const closeModal = () => setOpened(false);
  return (
    <>
  <div>
    <h1>Dashboard</h1>

    <Button onClick={openModal}>Add new asset</Button>
  </div>
  <Modal
        opened={opened}
        onClose={closeModal}
        title="Add new asset"
      >
        <AddAssetModalLayout />
      </Modal>
  </>
)}