const Tag = ({ children, bColor, tColor }) => {
  const styles = {
    background: bColor || '#000',
    color: tColor || '#fff',
    borderRadius: '0.2rem',
    padding: '0.2rem 0.4rem',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  }

  return <span style={styles}>{children}</span>
}

export default Tag
