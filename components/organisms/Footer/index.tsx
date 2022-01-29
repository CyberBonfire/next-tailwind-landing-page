import { Container } from '../../atoms/Container';
import { Paragraph } from '../../atoms/Typography';
import { Apple, Google } from '../../atoms/AppStoreButton';
import TwitterIcon from 'mdi-react/TwitterIcon';
import YoutubeIcon from 'mdi-react/YoutubeIcon';
import InstagramIcon from 'mdi-react/InstagramIcon';

export const Footer = () => {
  return (
    <footer className="pt-12 pb-6">
      <Container>
        <div className="relative m-auto flex w-full flex-col">
          <div className="flex justify-between flex-row">
            <div>
              <Paragraph className="text-xs font-medium uppercase text-gray-500">
                Services
              </Paragraph>
              <ul>
                <li>
                  <Paragraph className="my-3 block">About Us</Paragraph>
                </li>
                <li>
                  <Paragraph className="my-3 block">Support</Paragraph>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <Apple />
              <Google />
            </div>
          </div>

          <div className='flex justify-between flex-row mt-6'>
            <div>
            <Paragraph>
              © Copyright 2020. All Rights Reserved.
            </Paragraph>
            </div>
            <div className='flex'>
              <TwitterIcon color="#1e3a8a" />
              <YoutubeIcon color="#1e3a8a" />
              <InstagramIcon color="#1e3a8a" />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
