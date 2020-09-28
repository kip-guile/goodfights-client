import React from 'react'
import { Rate, Image, Collapse, Space } from 'antd'
//new psh
//review compnt
const ReviewBlock = ({
  reviewer_name,
  fight_title,
  review_rating,
  date,
  review_description,
  fight_rating,
  fight_description,
  fight_img,
}: any) => {
  const { Panel } = Collapse
  return (
    <div
      style={{
        marginTop: '1rem',
        marginBottom: '1rem',
        backgroundColor: '#ffffff',
        minWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: '1rem',
        paddingTop: '1rem',
        minHeight: '25rem',
      }}
    >
      <div style={{ width: '90%' }}>
        <p>
          <span style={{ fontWeight: 'bold' }}>{reviewer_name}</span> reviewed{' '}
          <span style={{ fontWeight: 'bold' }}>{fight_title}</span>
        </p>
      </div>
      <div
        style={{
          width: '90%',
          alignItems: 'flex-start',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Rate disabled defaultValue={review_rating} />
        <p>{date}</p>
      </div>
      <div
        style={{
          width: '90%',
          alignItems: 'flex-start',
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '0.5rem',
        }}
      >
        <Collapse style={{ borderBottom: '0.5rem', width: '100%' }}>
          <Panel header='view review details' key='1'>
            {review_description}
          </Panel>
        </Collapse>
      </div>
      <div
        style={{
          display: 'flex',
          width: '90%',
          border: '1px solid lightgrey',
        }}
      >
        <div style={{ margin: '0.5rem' }}>
          <Image width={150} src={fight_img} />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '0.2rem',
            paddingBottom: '0.3rem',
          }}
        >
          <p style={{ fontWeight: 'bold' }}>{fight_title}</p>
          <Rate disabled defaultValue={fight_rating} />
          <p>{fight_description}</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewBlock
