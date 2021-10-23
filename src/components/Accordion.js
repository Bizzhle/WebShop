import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { GrAdd, GrFormSubtract } from "react-icons/gr";
import { Mainmenu } from "../mainmenu";
import styles from "../styles/Accordion.module.scss";

export const Accordion = () => {
  const [isOpen, setIsOpen] = useState(null);
  const [isDeepOpen, setIsDeepOpen] = useState(null);

  const ShowAccordion = (id) => setIsOpen((prev) => (prev === id ? null : id));
  const ShowDeepAccordion = (id) =>
    setIsDeepOpen((prev) => (prev === id ? null : id));
  console.log(isDeepOpen);

  return (
    <div>
      {Mainmenu.map((item) => {
        return (
          <div key={Math.random()}>
            <div className={styles.accordion}>
              <p>{item.title}</p>
              {item.lists.length > 0 || item.items.length > 0 ? (
                <span>
                  {isOpen === item.id ? (
                    <FaAngleUp
                      style={{ height: 20, width: 30 }}
                      onClick={() => ShowAccordion(item.id)}
                    />
                  ) : (
                    <FaAngleDown
                      style={{ height: 20, width: 30 }}
                      onClick={() => ShowAccordion(item.id)}
                    />
                  )}
                </span>
              ) : (
                ""
              )}
            </div>
            {isOpen === item.id ? (
              <div>
                {item.items.map((value) => (
                  <div key={Math.random()}>
                    <div className={styles.product}>
                      {value.subCategories.length > 0 ? (
                        <span>
                          {isDeepOpen === value.id ? (
                            <GrFormSubtract
                              style={{ height: 10, width: 10 }}
                              onClick={() => ShowDeepAccordion(value.id)}
                            />
                          ) : (
                            <GrAdd
                              style={{ height: 10, width: 10 }}
                              onClick={() => ShowDeepAccordion(value.id)}
                            />
                          )}
                        </span>
                      ) : (
                        ""
                      )}

                      <p>{value.category}</p>
                    </div>

                    {isDeepOpen === value.id ? (
                      <ul className={styles.subproduct}>
                        {value.subCategories.map((v) => (
                          <li key={Math.random()}>{v.name}</li>
                        ))}
                      </ul>
                    ) : (
                      ""
                    )}
                  </div>
                ))}
                <div className={styles.panel}>
                  {item.lists.map((value) => (
                    <p
                      style={{
                        backgroundImage: `url(${value.pic})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        color: `${value.color}`,
                      }}
                      key={Math.random()}
                    >
                      {value.name}
                    </p>
                  ))}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
};