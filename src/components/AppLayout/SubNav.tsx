import { Group } from '@mantine/core';
import { useRouter } from 'next/router';
import { ArticleFeedFilters } from '~/components/Filters/FeedFilters/ArticleFeedFilters';
import { BountyFeedFilters } from '~/components/Filters/FeedFilters/BountyFeedFilters';
import { ImageFeedFilters } from '~/components/Filters/FeedFilters/ImageFeedFilters';
import { ModelFeedFilters } from '~/components/Filters/FeedFilters/ModelFeedFilters';
import { PostFeedFilters } from '~/components/Filters/FeedFilters/PostFeedFilters';
import { VideoFeedFilters } from '~/components/Filters/FeedFilters/VideoFeedFilters';
import { ManageHomepageButton } from '~/components/HomeBlocks/ManageHomepageButton';
import { HomeTabs } from '~/components/HomeContentToggle/HomeContentToggle';

const filterSections = [
  { pathname: '/', component: <ManageHomepageButton ml="auto" /> },
  { pathname: '/models', component: <ModelFeedFilters ml="auto" /> },
  { pathname: '/images', component: <ImageFeedFilters ml="auto" /> },
  { pathname: '/videos', component: <VideoFeedFilters ml="auto" /> },
  { pathname: '/posts', component: <PostFeedFilters ml="auto" /> },
  { pathname: '/articles', component: <ArticleFeedFilters ml="auto" /> },
  { pathname: '/bounties', component: <BountyFeedFilters ml="auto" /> },
  { pathname: '/tools/[slug]', component: <ImageFeedFilters ml="auto" hideMediaTypes hideTools /> },
];

export function SubNav2() {
  const router = useRouter();

  const section = filterSections.find((x) => x.pathname === router.pathname);

  return (
    <Group py={4} px={8} spacing={8} position="apart" noWrap={router.pathname === '/'}>
      <HomeTabs />
      {section?.component}
    </Group>
  );
}
