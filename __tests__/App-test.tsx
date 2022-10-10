/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock(
  'react-native-vector-icons/MaterialCommunityIcons',
  () => 'MockedMaterialCommunityIcons',
);

it('renders correctly', () => {});
