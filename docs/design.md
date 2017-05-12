# Design for Gamera
-------------------

### ECS System
------------------

```
+--------+  1      n  +-----------+
| Entity | ---------- | Component |
+--------+            +-----------+
    | n
    |
    |
    | n
+-------+  n       1  +--------+
| Scene | ----------- | Engine |
+-------+             +--------+
    | 1 
    |
    | n
+--------+
| System |
+--------+

```

**Who needs to know the entity.id?**

- some System contructors may only operate on certain entities. These can be passed by ref or specified by id?

**How do System's filter entities?**

- by id
- by component makeup

`entity::getComponent(ComponentType)`
`{
    position: ComponentType <required>
    color: ComponentType <optional>
}
...

**System ordering...?**

This isn't totally important right now...

RenderSystem should kind've always be last...

**Handling and reasoning with user input**

- InputComponent tied to the entity it kind've controls...

```
ControllerComponent {
    source: "keyboard" | "gamepad1",
    // domain specific controls
    up: float,
    down: float,
    left: float,
    right: float,
    yaw: float
}


function register(controller, map, inputs) {
    for(var p in map) {
        inputs.on(p.value, controller[p.key].trigger);
    }
}
```