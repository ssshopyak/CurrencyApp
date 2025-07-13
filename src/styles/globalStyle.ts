import {StyleSheet} from 'react-native';

export const COLORS = {
  primary: '#4C6EF5',
  background: '#F7F9FC',
  button: '#4C6EF5',
  textPrimary: '#333',
  textSecondary: '#888',
  favorite: 'gold',
  error: 'red',
  white: '#fff',
  black: '#000',
  grayLight: '#f0f0f0',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  buttonPrimary: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  buttonPrimaryText: {
    color: COLORS.white,
    fontWeight: '600',
    fontSize: 16,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: COLORS.textSecondary,
  },
  separator: {
    height: 10,
  },
  errorText: {
    color: COLORS.error,
    textAlign: 'center',
    marginTop: 10,
  },
});
