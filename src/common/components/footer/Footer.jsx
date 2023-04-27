import {
  Box,
  Heading,
  VStack,
  HStack,
  IconButton,
  Icon,
  Spacer,
  List,
  ListItem,
  SimpleGrid,
  Link,
  Flex
} from '@chakra-ui/react';
import { FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

import { ShowwcaseIcon } from '@/icons/index.js';
import siteConfig from '../../../../config/site.config';
import CopyrightNotice from './CopyrightNotice';

const Footer = () => {
  return (
    <footer>
      <Box id={'footer'} p={{ base: 10, md: 20 }} bg={'black'} color={'white'}>
        <SimpleGrid columns={{ base: 1, md: 3 }}>
          <VStack>
            <Heading fontFamily={'Poppins'}>LifeNearYou</Heading>
            <HStack spacing={2}>
              <Link href={siteConfig.urls.socials.twitter} isExternal>
                <IconButton
                  aria-label="twitter"
                  bg={'transparent'}
                  _hover={{ bg: 'transparent', color: 'twitter' }}
                  _active={{ bg: 'transparent', color: 'twitter' }}
                  _visited={{ bg: 'transparent', color: 'twitter' }}
                  icon={<Icon as={FaTwitter} w={6} h={6} />}
                />
              </Link>
              <Link href={siteConfig.urls.socials.instagram} isExternal>
                <IconButton
                  aria-label="instagram"
                  bg={'transparent'}
                  _hover={{ bg: 'transparent', color: 'instagram' }}
                  _active={{ bg: 'transparent', color: 'instagram' }}
                  _visited={{ bg: 'transparent', color: 'instagram' }}
                  icon={<Icon as={FaInstagram} w={6} h={6} />}
                />
              </Link>
              <Link href={siteConfig.urls.socials.youtube} isExternal>
                <IconButton
                  aria-label="youtube"
                  bg={'transparent'}
                  _hover={{ bg: 'transparent', color: 'whiteAlpha.500' }}
                  _active={{ bg: 'transparent', color: 'whiteAlpha.500' }}
                  _visited={{ bg: 'transparent', color: 'whiteAlpha.500' }}
                  icon={<Icon as={FaYoutube} w={6} h={6} />}
                />
              </Link>
              {/* <Link href={siteConfig.urls.socials.showwcase} isExternal>
                <IconButton
                  aria-label="showwcase"
                  bg={'transparent'}
                  _hover={{ bg: 'transparent', color: 'whiteAlpha.500' }}
                  _active={{ bg: 'transparent', color: 'whiteAlpha.500' }}
                  _visited={{ bg: 'transparent', color: 'whiteAlpha.500' }}
                  icon={<Icon as={ShowwcaseIcon} w={6} h={6} />}
                />
              </Link> */}
            </HStack>
          </VStack>

          <Spacer />

          <SimpleGrid columns={3} mt={{ base: 4, md: 0 }}>
            <VStack>
              <Heading
                size={'sm'}
                alignSelf={'flex-start'}
                whiteSpace={'nowrap'}
              >
                QUICK LINKS
              </Heading>
              <List
                fontSize={'small'}
                alignSelf={'flex-start'}
                whiteSpace={'nowrap'}
                spacing={1}
              >
                {/* <ListItem>
                  <Link href={siteConfig.urls.about} isExternal>
                    About
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={siteConfig.urls.status} isExternal>
                    Status
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href={'/external-articles'}>External Articles</Link>
                </ListItem> */}

                {/* <ListItem>
                  <Link href={siteConfig.urls.newsletter} isExternal>
                    Newsletter
                  </Link>
                </ListItem> */}
                <ListItem>
                  <Link href={'/support-us'}>Support Us </Link>❤️
                </ListItem>
              </List>
            </VStack>

            <Spacer />

            <VStack>
              <Heading size={'sm'} alignSelf={'flex-start'}>
                LEGAL
              </Heading>
              <List fontSize={'small'} alignSelf={'flex-start'} spacing={1}>
                <ListItem>
                  <Link href={'/legal/privacy-policy'}>Privacy Policy</Link>
                </ListItem>
                <ListItem>
                  <Link href={'/legal/cookie-policy'}>Cookie Policy</Link>
                </ListItem>
                <ListItem>
                  <Link href={'/legal/terms-and-conditions'}>
                    Terms &amp; Conditions
                  </Link>
                </ListItem>
              </List>
            </VStack>
          </SimpleGrid>
        </SimpleGrid>
      </Box>
      <CopyrightNotice />
    </footer>
  );
};

export default Footer;
