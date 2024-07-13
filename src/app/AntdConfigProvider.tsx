'use client';

import { FC, ReactNode } from 'react';
import {
  StyleProvider,
  legacyLogicalPropertiesTransformer,
} from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';

export const AntdConfigProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <StyleProvider layer transformers={[legacyLogicalPropertiesTransformer]}>
      <ConfigProvider theme={{
        "token": {
          "colorPrimary": "#395664",
          "colorBgContainerDisabled": "#E6EBEC",
        },
        "components": {
          "Spin": {
            "colorPrimary": "#395664"
          },
          "Button": {
            "primaryShadow": "unset",
            "boxShadow": "unset",
            "borderRadius": 80,
            "borderRadiusLG": 80,
            "controlHeightLG": 48,
            "controlHeight": 40,
            "defaultColor": "#395664",
            "algorithm": true
          }
        }
      }}>{children}</ConfigProvider>
    </StyleProvider>
  );
};
