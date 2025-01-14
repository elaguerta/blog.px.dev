/*
 * Copyright 2018- The Pixie Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header';
import Footer from '../footer';
import { ThemeModeContext } from '../mainThemeProvider.tsx';
import CookiesBanner from '../cookies-banner/cookies-banner';

const Layout = ({
  children, hideMenu,
}) => (
  <>
    <ThemeModeContext.Consumer>
      {({ toggleTheme, theme }) => (
        <>
          <Header
            hideMenu={hideMenu}
            onThemeTypeSwitch={toggleTheme}
            theme={theme}
          />
          <main>{children}</main>
          <Footer />
          <CookiesBanner />
        </>
      )}
    </ThemeModeContext.Consumer>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hideMenu: PropTypes.bool,
};
Layout.defaultProps = {
  hideMenu: false,
};
export default Layout;
