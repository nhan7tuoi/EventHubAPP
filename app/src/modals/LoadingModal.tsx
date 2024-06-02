import React from 'react'
import { ActivityIndicator, Modal, Text, View } from 'react-native'
import { globalStyles } from '../styles/globalStyles';
import { TextComponent } from '../components';

interface Props {
      visible: boolean;
      message?: string;
      onClosed?: () => void;
    }

const LoadingModal = (props:Props) => {
    const { visible, message, onClosed } = props;
  return (
    <Modal
    visible={visible}
    transparent
    statusBarTranslucent
    style={{flex: 1}}
    >
        <View style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <ActivityIndicator size="large" color="#fff" />
            <TextComponent  text={message || 'Loading...'} color="#fff" size={20} styles={{marginTop: 10}} />
        </View>
    </Modal>
  )
}

export default LoadingModal;
