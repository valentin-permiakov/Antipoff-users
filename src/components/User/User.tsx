import React from 'react';
import styles from './user.module.scss';
import { EIcons, Icon } from '../icons/Icon';

type UserProps = {
  phone: string;
  email: string;
};

const User: React.FC<UserProps> = ({ phone, email }) => {
  return (
    <>
      <p className={styles.userInfo}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
        tempore cum iste officiis corporis, error dolore illo atque voluptatem
        animi repellendus, eius consequuntur consequatur a ratione esse
        doloremque. Sapiente, tenetur? Voluptas iusto maxime eius sed, corporis
        error? Error magni iure doloribus obcaecati doloremque animi tempore
        beatae omnis voluptate a minus reiciendis vel, sed unde, adipisci nihil
        voluptates rem neque laudantium! Qui et reprehenderit omnis minus iusto,
        possimus consectetur aut. Aut doloribus voluptates id dolore ullam nemo
        minima, placeat aliquid nisi mollitia nihil commodi sint eum deserunt
        sapiente, cum a distinctio. Illo neque dolorum explicabo minima aperiam
        eius recusandae deleniti facere, officia dolores exercitationem non
        earum doloremque maxime nobis quasi aliquid tenetur ducimus nisi quo
        error! Culpa quam itaque hic doloribus? Asperiores, blanditiis. Odit,
        voluptatum! Quasi, dignissimos accusamus minus ipsum natus vero fugiat,
        ex voluptatem tempora ipsa ut quisquam amet unde? Asperiores numquam
        nihil aspernatur aut, alias dolores eos eaque quasi.
      </p>
      <div className={styles.contacts}>
        <a
          href={`tel:${phone}`}
          className={styles.contactLink}
        >
          <Icon name={EIcons.phoneIcon} /> {phone}
        </a>
        <a
          href={`mailto:${email}`}
          className={styles.contactLink}
        >
          <Icon name={EIcons.emailIcon} /> {email}
        </a>
      </div>
    </>
  );
};
export default User;
