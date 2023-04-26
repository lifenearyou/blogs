import {
  Box,
  Button,
  Center,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Spacer,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { CheckCircleIcon } from '@chakra-ui/icons';

import { KofiWidget } from './components';
import siteConfig from '../../../config/site.config';
// import { AdSense } from 'common/utils';

const SupportMePage = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  return (
    <>
      <Box m={{ base: '5% 10%', '2xl': '5% 15%' }}>
        <Heading textAlign={'center'}>SUPPORT US 💖</Heading>
        <Text textAlign={'center'} my={4}>
          Content creation is hard without your support.
        </Text>
        <Box my={8}>
          <SimpleGrid my={8} columns={{ base: 1, md: 3 }}>
            <Box>
              <Heading size={'md'}>Follow us on Youtube and Instagram</Heading>
              <Text my={4}>
                Help us reach more audience. I also share our thoughts, resources
                and more useful stuff.
              </Text>
            </Box>
            <Spacer />
            <Center bg={bgColor} p={12} my={2} rounded={'md'}>
              <Link href={siteConfig.urls.socials.youtube} isExternal>
                <Button
                  leftIcon={<FaYoutube />}
                  bg={'red'}
                  color={'white'}
                  shadow={'md'}
                  _hover={{ bg: 'black', opacity: 0.8 }}
                  _active={{ bg: 'black', opacity: 0.8 }}
                >
                  Follow
                </Button>
              </Link>
              <Link href={siteConfig.urls.socials.instagram} isExternal marginLeft={'5'}>
                <Button
                  leftIcon={<FaInstagram />}
                  bg={'twitter'}
                  color={'white'}
                  shadow={'md'}
                  _hover={{ bg: 'black', opacity: 0.8 }}
                  _active={{ bg: 'black', opacity: 0.8 }}
                >
                  Follow
                </Button>
              </Link>
            </Center>
          </SimpleGrid>
        </Box>

        <Box my={8}>
          <SimpleGrid my={8} columns={{ base: 1, md: 2 }} spacing={6}>
            {/* Ko-fi widget */}
            <KofiWidget />

            <Box>
              <Heading size={'md'}>Donate</Heading>
              <Text my={4}>
                Your donations keep this blog running and motivate us to create
                more content.
              </Text>
              <List my={4}>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color={'green.500'} />
                  You will be added to the list of supporters.
                </ListItem>
              </List>
              <Text as={'i'} fontSize={'sm'}>
                If you don&apos;t want to use this widget, you can donate via our{' '}
                <Link href={siteConfig.urls.kofi} color={'brand.50'} isExternal>
                  ko-fi page
                </Link>
                .
              </Text>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
      {/* <Box my={20} mx={'auto'}>
        <AdSense
          style={{ display: 'block' }}
          adFormat={'fluid'}
          adSlot={siteConfig.adsense.slots.inFeed}
          data-ad-layout-key={'-f9+52+6z-e1+5b'}
        />
      </Box> */}
    </>
  );
};

export default SupportMePage;
