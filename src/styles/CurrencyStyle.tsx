import {StyleSheet} from 'react-native';
import {COLORS} from './globalStyle';

export const styles = StyleSheet.create({
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
    alignItems: 'flex-end',
  },
  favButton: {
    backgroundColor: '#4C6EF5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    shadowColor: COLORS.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  favButtonText: {
    color: COLORS.white,
    fontWeight: '600',
    fontSize: 16,
  },
  currencyItem: {
    backgroundColor: COLORS.white,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    shadowColor: COLORS.black,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  currencyCode: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  currencyRate: {
    fontSize: 16,
    fontWeight: '400',
    color: COLORS.textSecondary,
  },
  updateText: {
    textAlign: 'center',
    color: COLORS.textSecondary,
    margin: 10,
  },
});
