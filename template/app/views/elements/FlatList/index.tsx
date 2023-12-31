import React from 'react';
import { FlatList as BaseFlatList, StyleSheet, FlatListProps, Keyboard } from 'react-native';
import { isAndroid } from 'utils';
import { Any } from 'types';

interface BaseFlatListProps extends FlatListProps<Any> {
  forwardRef?: React.Ref<BaseFlatList>;
}

export const FlatList: React.FC<BaseFlatListProps> = ({ forwardRef, ...props }) => (
  <BaseFlatList
    ref={forwardRef}
    style={styles.flatList}
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
    keyboardShouldPersistTaps="handled"
    onScrollBeginDrag={() => {
      isAndroid && props.keyboardDismissMode === 'on-drag' && Keyboard.dismiss();
    }}
    {...props}
  />
);

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    width: '100%',
  },
});

FlatList.defaultProps = {
  keyboardDismissMode: 'none',
};
