import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+917006735543">111-111-1111</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:contact@nasyxnadeem.dev">
            
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovation one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://linkedin.com">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.google.com/search?q=instagram+.com%2Fmalik_kasir&client=ms-android-xiaomi&sxsrf=AJOqlzUHDgYWJ3QZGuyHbYZuBDrQcVM9-Q%3A1674013438943&ei=_mrHY4-EOeGK3LUPwrq7oA4&oq=instagram+.com%2Fmalik_kasir&gs_lcp=ChNtb2JpbGUtZ3dzLXdpei1zZXJwEAMyCAghEKABEMMEOggIABCiBBCwAzoKCCEQoAEQwwQQCkoECEEYAVD9F1iUIGDOJWgAcAB4AIABogKIAaQJkgEDMi01mAEAoAEByAEFwAEB&sclient=mobile-gws-wiz-serp>
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
