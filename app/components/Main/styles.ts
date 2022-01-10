import { styled } from "~/styles/stitches.config"

export const Wrapper = styled('main', {
  width: '100%',
  height: '100%',
  padding: '3rem',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
})

export const Logo = styled('img', {
  width: '25rem',
  marginBottom: '2rem'
})

export const Title = styled('h1', {
  fontSize: '2.5rem'
})

export const Description = styled('h2', {
  fontSize: '2rem',
  fontWeight: '400'
})

export const Illustration = styled('img', {
  marginTop: '3rem',
  width: '(min-width: 30rem, 100%)'
})
