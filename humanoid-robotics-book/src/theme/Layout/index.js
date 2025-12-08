import React from 'react';
import Layout from '@theme-original/Layout';
import RoboGuideWidget from '@site/src/theme/RoboGuideWidget';

export default function LayoutWrapper(props) {
  return (
    <>
      <Layout {...props}>
        {props.children}
      </Layout>
      <RoboGuideWidget />
    </>
  );
}
