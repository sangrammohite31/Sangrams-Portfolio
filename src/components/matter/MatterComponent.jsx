import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import boxImage from '/FrontendAND Devops Engineer.png'; // Adjust the path to your image
import ropeTexture from '/textureforrop.jpg'; // Adjust the path to your rope texture

const ChainsAndBox = () => {
    const scene = useRef(null);
    const engine = useRef(Matter.Engine.create());
    const render = useRef(null);

    useEffect(() => {
        const { Engine, Render, Runner, Composites, Constraint, MouseConstraint, Mouse, Composite, Bodies } = Matter;

        const width = 700;
        const height = 600;

        // create engine
        engine.current = Engine.create();
        engine.current.gravity.y = 1; // Downward gravity

        // create renderer
        render.current = Render.create({
            element: scene.current,
            engine: engine.current,
            options: {
                width,
                height,
                showAngleIndicator: true,
                wireframes: false, // Disable wireframes to see the images
                background: '#000' //
              }
        });

        Render.run(render.current);

        // create runner
        const runner = Runner.create();
        Runner.run(runner, engine.current);

        // create two chains
        const group = Matter.Body.nextGroup(true);

        const chainA = Composites.stack(100, 50, 5, 1, 10, 10, function(x, y) {
            return Bodies.rectangle(x, y, 50, 20, {
                collisionFilter: { group: group },
                render: {
                    sprite: {
                      
                        texture: ropeTexture,
                        xScale: 0.02,
                        yScale: 0.01
                    }
                }
            });
        });

        const chainB = Composites.stack(400, 50, 5, 1, 10, 10, function(x, y) {
            return Bodies.rectangle(x, y, 50, 20, {
                collisionFilter: { group: group },
                render: {
                    sprite: {
                        texture: ropeTexture,
                        xScale: 0.02,
                        yScale: 0.01
                    }
                }
            });
        });

        Composites.chain(chainA, 0.5, 0, -0.5, 0, {
            stiffness: 0.9,
            length: 0,
            render: { type: 'line' }
        });

        Composites.chain(chainB, 0.5, 0, -0.5, 0, {
            stiffness: 0.9,
            length: 0,
            render: { type: 'line' }
        });

        // Attach the top of each chain to a static point to hang them
        const chainAConstraint = Constraint.create({
            pointA: { x: 400, y: 50 },
            bodyB: chainA.bodies[0],
            pointB: { x: -25, y: 0 },
            stiffness: 0.9,
            length: 10
        });

        const chainBConstraint = Constraint.create({
            pointA: { x: 500, y: 50 },
            bodyB: chainB.bodies[0],
            pointB: { x: -25, y: 0 },
            stiffness: 0.9,
            length: 10
        });

        // Create the box with an image texture
        const box = Bodies.rectangle(300, 300, 80, 80, {
            render: {
                sprite: {
                    texture: boxImage,
                    xScale: 0.2,
                    yScale: 0.2
                }
            }
        });

        // Create constraints to connect the box to the last body of each chain at the top of the box
        const connectorA = Constraint.create({
            bodyA: chainA.bodies[chainA.bodies.length - 1],
            pointA: { x: 25, y: 0 },
            bodyB: box,
            pointB: { x: 0, y: -40 },
            stiffness: 0.9,
            length: 10,
            render: { type: 'line' }
        });

        const connectorB = Constraint.create({
            bodyA: chainB.bodies[chainB.bodies.length - 1],
            pointA: { x: 25, y: 0 },
            bodyB: box,
            pointB: { x: 0, y: -40 },
            stiffness: 0.9,
            length: 10,
            render: { type: 'line' }
        });

        Composite.add(engine.current.world, [chainA, chainB, box, connectorA, connectorB, chainAConstraint, chainBConstraint]);

        // add walls
        Composite.add(engine.current.world, [
            Bodies.rectangle(400, 0, 800, 50, {isStatic: true,render:{fillStyle:"#000"} }),
            Bodies.rectangle(400, 600, 800, 50,{isStatic: true,render:{fillStyle:"#000"} }),
            Bodies.rectangle(800, 300, 50, 600,{isStatic: true,render:{fillStyle:"#000"} }),
            Bodies.rectangle(0, 300, 50, 600,{isStatic: true,render:{fillStyle:"#000"} }),
        ]);

        // add mouse control
        const mouse = Mouse.create(render.current.canvas),
            mouseConstraint = MouseConstraint.create(engine.current, {
                mouse,
                constraint: {
                    stiffness: 0.2,
                    render: {
                        visible: false
                    }
                }
            });

        Composite.add(engine.current.world, mouseConstraint);

        // keep the mouse in sync with rendering
        render.current.mouse = mouse;

        // fit the render viewport to the scene
        Render.lookAt(render.current, {
            min: { x: 0, y: 0 },
            max: { x: 800, y: 600 }
        });

        return () => {
            Matter.Render.stop(render.current);
            Matter.Runner.stop(runner);
            Matter.Composite.clear(engine.current.world);
            Matter.Engine.clear(engine.current);
            render.current.canvas.remove();
            render.current.canvas = null;
            render.current.context = null;
            render.current.textures = {};
        };
    }, []);

    return <div ref={scene} />;
  };

  export default ChainsAndBox;